import React, { useCallback, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useParams } from "react-router-dom";
import { Card, Col, message, Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import LanguagesChart from "./LanguagesChart";
import PieChart from "./PieChart";
import { onCreateAnswer } from "../graphql/subscriptions";

const Results = () => {
  let { pollId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState([]);

  const fetchResults = useCallback(async () => {
    setLoading(true);
    try {
      const answerData = await API.graphql(
        graphqlOperation(
          `
          query MyQuery($id: ID!) {
            getPoll(id: $id) {
              questions {
                items {
                  id
                  title
                  answers {
                    items {
                      content
                    }
                  }
                }
              }
            }
          }
        `,
          {
            id: pollId,
          }
        )
      );
      const answers = answerData?.data?.getPoll?.questions?.items || [];
      setAnswers(answers);
      setLoading(false);
    } catch (err) {
      console.error("error fetching answers");
      setError(err);
      setLoading(false);
    }
  }, [pollId]);

  useEffect(() => {
    fetchResults().catch((e) => {
      console.error(e);
      message.error("Can not get the answers");
    });
  }, [fetchResults]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateAnswer)
    ).subscribe({
      next: (res) => {
        const {
          value: {
            data: { onCreateAnswer },
          },
        } = res;
        const answerState = [...answers];
        const answerIdx = answerState.findIndex(
          (answer) => answer.id === onCreateAnswer.questionID
        );
        if (answerIdx >= 0) {
          answerState[answerIdx].answers.items.push({
            content: onCreateAnswer.content,
          });
          setAnswers(answerState);
        }
      },
    });
    return () => subscription.unsubscribe();
  }, [answers]);

  if (loading) {
    return <LoadingOutlined />;
  }

  return (
    <div className="container">
      <h2>Results</h2>
      {!error && !loading ? (
        <>
          <Row style={{ width: "100%" }} gutter={[32, 32]}>
            <Col md={{ span: 12, offset: 6 }} xs={{ span: 24 }}>
              <Card>
                <h2>What is your favorite language?</h2>
                <LanguagesChart
                  data={answers.find(
                    (i) => i.title === "What's your favorite programming languages?"
                  )}
                />
              </Card>
            </Col>
          </Row>
        </>
      ) : null}
    </div>
  );
};

export default Results;

import React, { useCallback, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listQuestions } from "../graphql/queries";
import { useParams } from "react-router-dom";
import { message, Steps } from "antd";
import Question from "./Questions";
import { LoadingOutlined } from "@ant-design/icons";

const { Step } = Steps;

const Poll = () => {
  let { pollId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const questionData = await API.graphql(
        graphqlOperation(`
          query ListQuestions(
            $filter: ModelQuestionFilterInput
          ) {
            listQuestions(filter: $filter) {
              items {
                id
                title
                pollID
                choices
                createdAt
                updatedAt
              }
            }
          }
        `, {
          filter: { pollID: { eq: pollId } },
        })
      );
      const questions = questionData.data.listQuestions.items;
      setQuestions(questions);
      setLoading(false);
    } catch (err) {
      console.error("error fetching questions");
      setError(err);
      setLoading(false);
    }
  }, [pollId]);

  const next = () => {
    setCurrent((current) => current + 1);
  };

  useEffect(() => {
    fetchQuestions().catch((e) => {
      console.error(e);
      message.error("Can not get the questions");
    });
  }, [fetchQuestions]);

  if (loading) {
    return <LoadingOutlined />;
  }

  return (
    <div className="container">
      <h2>Poll: {pollId}</h2>
      {!error && !loading && (
        <>
          <Steps current={current} style={{ marginBottom: "1rem" }}>
            {questions.map((item, index) => (
              <Step key={item.id} title={`Question ${index + 1}`} />
            ))}
          </Steps>
          <Question
            pollId={pollId}
            next={next}
            question={questions[current]}
            total={questions.length}
            current={current}
          />
        </>
      )}
    </div>
  );
};

export default Poll;

import React, { useState } from "react";
import { Button, Card, message, Radio, Typography } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import { createAnswer } from "../graphql/mutations";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

const Question = ({ question, current, next, total, pollId }) => {
  const [value, setValue] = useState(undefined);
  const history = useHistory();
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const onChange = (e) => setValue(e.target.value);

  const addResponse = async (questionID, value) => {
    try {
      await API.graphql(
        graphqlOperation(createAnswer, {
          input: {
            questionID: questionID,
            content: value,
          },
        })
      );
    } catch (err) {
      console.error("Error in addResponse", err);
      message.error("Couldn't save the response");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addResponse(question.id, value);
    if (current < total - 1) {
      next();
    } else {
      history.push(`/results/${pollId}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card className="question">
          <Title level={4}>{question.title}</Title>
          <Radio.Group
            onChange={onChange}
            value={value}
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            {(question.choices || []).map((choice) => (
              <Radio key={choice} style={radioStyle} value={choice}>
                {choice}
              </Radio>
            ))}
          </Radio.Group>
        </Card>
        <div className="steps-action">
          {current < total - 1 && (
            <Button disabled={!value} htmlType="submit" type="primary">
              Next
            </Button>
          )}
          {current === total - 1 && (
            <Button htmlType="submit" type="primary">
              Done
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default Question;

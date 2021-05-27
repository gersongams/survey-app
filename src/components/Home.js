import React, { useCallback, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { Button, Col, message, Row, Typography } from "antd";

const { Title } = Typography;

const Home = () => {
  const [polls, setPolls] = useState([]);

  const fetchPolls = useCallback(async () => {
    try {
      const {data} = await API.graphql(graphqlOperation(`
        query {
          listPolls {
            items {
              id
              name
            }
          }
        }
      `));
      const polls = data.listPolls.items || [];
      setPolls(polls);
    } catch (err) {
      console.error("error fetching poll");
      message.error("error fetching poll");
    }
  }, []);

  useEffect(() => {
    fetchPolls().catch((e) => {
      console.error(e);
      message.error("Can not get the questions");
    });
  }, [fetchPolls]);

  return (
    <Row gutter={[16, 16]} align="middle" justify="center">
      <Col span={24}>
        <div className="container">
          <Title level={3}>Welcome to the real time survey</Title>
          <Title level={4}>Choose one poll</Title>
        </div>
      </Col>
      <Col span={24}>
        <div className="container">
          {polls.map((poll) => (
            <Link to={`/poll/${poll.id}`} key={poll.id}>
              <Button type="primary">{poll.name}</Button>
            </Link>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Home;

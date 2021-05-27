import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Poll from "./components/Poll";
import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import Results from "./components/Results";

const { Header, Footer, Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .question {
    margin-bottom: 1rem;
  }
`;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: black;
`

const StyledContent = styled(Content)`
  padding: 1rem;
  height: 100%;
  flex: 1;
  @media (min-width: 900px) {
    padding: 2rem;
  }
`

const StyledFooter = styled(Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: black;
  color: white;
  span {
    color: red;
    margin: 0 0.2rem;
  }
  a {
    color: white;
    margin-left: 0.2rem;
  }
`

const App = () => (
    <Router>
      <StyledLayout>
        <StyledHeader>
          <div>
            <Link to="/">
              <h1 style={{ color: "white" }}>Survey</h1>
            </Link>
          </div>
          <div>
            <AmplifySignOut button-text="Sign Out"></AmplifySignOut>
          </div>
        </StyledHeader>
        <StyledContent>
          <Switch>
            <Route path="/poll/:pollId">
              <Poll />
            </Route>
            <Route path="/results/:pollId">
              <Results />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </StyledContent>
        <StyledFooter>
          Built with <span>&hearts;</span> by{" "}
          <a href="https://github.com/gersongams">@gersongams</a>
        </StyledFooter>
      </StyledLayout>
    </Router>
);

export default withAuthenticator(App);

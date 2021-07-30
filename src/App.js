import logo from "./logo.svg";
import "./App.css";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Route, Switch } from "react-router";
import Welcome from "./Welcome";
import SubmissionPage from "./SubmissionPage";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

function App() {
  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  });

  let routes = (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>

      <Route path="/shoutouts">
        <SubmissionPage ws={client} />
      </Route>
    </Switch>
  );

  return (
    <Router>
      <div>{routes}</div>
    </Router>
  );
}

export default App;

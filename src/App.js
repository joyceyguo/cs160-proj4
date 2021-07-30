import logo from "./logo.svg";
import "./App.css";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Route, Switch } from "react-router";
import Welcome from "./Welcome";
import SubmissionPage from "./SubmissionPage";
import ShoutoutList from "./ShoutoutList";
import AnonSubmissionPage from "./AnonSubmissionPage";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

function App() {
  const [shoutouts, setShoutouts] = useState([]);

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    
    client.onmessage = function (receivedMessage) {
      console.log(receivedMessage);
      var received = JSON.parse(receivedMessage.data);
      console.log("Received: " + JSON.stringify(received));
      setShoutouts([...shoutouts, received]);
    };
  });

  let routes = (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>

      <Route path="/submit">
        <SubmissionPage ws={client} />
      </Route>

      <Route path="/anonsubmit">
        <AnonSubmissionPage ws={client} />
      </Route>

      <Route path="/display">
        <ShoutoutList shoutouts={shoutouts} />
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

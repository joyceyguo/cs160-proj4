import logo from "./logo.svg";
import "./App.css";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import React, { useEffect } from "react";

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
  return (
    <div className="App">
      <div></div>
      Testing the app!
    </div>
  );
}

export default App;

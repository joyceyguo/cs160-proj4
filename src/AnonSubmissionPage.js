import React, { useState, useEffect } from "react";
import AnonForm from "./AnonymousForm";
import ShoutoutList from "./ShoutoutList";

function AnonSubmissionPage(props) {
  const { ws } = props;

  const [shoutout, setShoutout] = useState({});

  function handleChange(event) {
    const { value, name } = event.target;
    if (name !== "anonymous") {
      setShoutout({
        ...shoutout,
        [name]: value,
      });
    } else if (name === "anonymous" && value === "on") {
      setShoutout({
        ...shoutout,
        ["from"]: "Anonymous",
      });
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    ws.send(JSON.stringify(shoutout));
    setShoutout({});
    event.target.reset();
  }

  return (
    <div className="page-container">
      <div className="header">WALL OF GRATITUDE</div>
      <div>
        <AnonForm
          onSubmit={onSubmit}
          handleChange={handleChange}
          shoutout={shoutout}></AnonForm>
      </div>
    </div>
  );
}

export default AnonSubmissionPage;

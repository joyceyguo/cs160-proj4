import React, { useState, useEffect } from "react";
import ShoutoutForm from "./ShoutoutForm";
import ShoutoutList from "./ShoutoutList";

function SubmissionPage(props) {
  const { ws } = props;

  const [shoutout, setShoutout] = useState({});

  function handleChange(event) {
    const { value, name } = event.target;
    setShoutout({
      ...shoutout,
      [name]: value,
    });
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
        <ShoutoutForm
          onSubmit={onSubmit}
          handleChange={handleChange}
          shoutout={shoutout}></ShoutoutForm>
      </div>
    </div>
  );
}

export default SubmissionPage;

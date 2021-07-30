import React, { useState, useEffect } from "react";
import ShoutoutForm from "./ShoutoutForm";
import ShoutoutList from "./ShoutoutList";

function SubmissionPage(props) {
  const { ws } = props;

  const [shoutouts, setShoutouts] = useState([]);
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
    ws.send(shoutout);
    setShoutouts([...shoutouts, shoutout]);
    setShoutout({});
    event.target.reset();
    console.log(shoutouts);
  }

  return (
    <div>
      <div>
        <ShoutoutForm
          onSubmit={onSubmit}
          handleChange={handleChange}
          shoutout={shoutout}></ShoutoutForm>
        <ShoutoutList shoutouts={shoutouts} />
      </div>
    </div>
  );
}

export default SubmissionPage;

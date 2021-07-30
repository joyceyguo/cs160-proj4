import React from "react";
import "./Shoutouts.css";

function ShoutoutForm(props) {
  const { onSubmit, handleChange, shoutout } = props;

  return (
    <div className="form-container">
      <form
        action=""
        id="shoutout"
        onSubmit={onSubmit}
        className="form"
        onChange={handleChange}>
        <div className="prompt">Who do you want to appreciate today?</div>
        <input
          name="to"
          type="text"
          placeholder="Individual or Team Name"
          value={shoutout.to}
          className="single-line-text"
        />
        <div className="prompt">Your Name?</div>

        <input
          name="from"
          type="text"
          placeholder=""
          value={shoutout.from}
          className="single-line-text"
        />
        <div className="prompt">Type your shoutout below!</div>

        <textarea
          name="text"
          form="shoutout"
          maxLength={2000}
          placeholder="Thank you for..."
          value={shoutout.msg}
          className="multi-line-text"></textarea>
        <button className="button">Appreciate!</button>
      </form>
    </div>
  );
}

export default ShoutoutForm;

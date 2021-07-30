import React from "react";
import "./Shoutouts.css";


function ShoutoutForm(props) {
  const { onSubmit, handleChange, shoutout } = props;

  return (
    <div className='form-container'>
      <form
        action=""
        id="shoutout"
        onSubmit={onSubmit}
        className="form"
        onChange={handleChange}>
        <input
          name="to"
          type="text"
          placeholder="Individual or Team Name"
          value={shoutout.to}
          className="single-line-text"
        />
        <input
          name="from"
          type="text"
          placeholder="Your Name"
          value={shoutout.from}
          className="single-line-text"
        />
        <textarea
          name="text"
          form="shoutout"
          maxLength={2000}
          placeholder="Thank you for..."
          value={shoutout.msg}
          className="multi-line-text"></textarea>
        <div className="button-container">
          <button className="button">Appreciate</button>
        </div>
      </form>
    </div>
  );
}

export default ShoutoutForm;

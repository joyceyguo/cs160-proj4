import React from "react";
import "./Shoutouts.css";


function Shoutout(props) {
  const { to, from, msg } = props;

  return (
    <div className='shoutout'>
      <div className="to">To: {to}</div>
      <div className="message">{msg}</div>
      <div className="from">From: {from}</div>
    </div>
  );
}

export default Shoutout;

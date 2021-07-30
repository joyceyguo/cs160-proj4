import React, { useEffect } from "react";
import Shoutout from "./Shoutout";

function ShoutoutList(props) {
  const { shoutouts } = props;
  return (
    <div className="page-container">
      <div className="header">WALL OF GRATITUDE</div>
      <div>
        {shoutouts.map((shoutout, index) => (
          <Shoutout
            key={index}
            to={shoutout.to}
            from={shoutout.from}
            msg={shoutout.text}></Shoutout>
        ))}
      </div>
    </div>
  );
}

export default ShoutoutList;

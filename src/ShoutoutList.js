import React from "react";
import Shoutout from "./Shoutout";

function ShoutoutList(props) {
  const { shoutouts } = props;
  return (
    <div>
      {shoutouts.map((shoutout, index) => (
        <Shoutout key={index} to={shoutout.to} from={shoutout.from} msg={shoutout.text}></Shoutout>
      ))}
    </div>
  );
}

export default ShoutoutList;

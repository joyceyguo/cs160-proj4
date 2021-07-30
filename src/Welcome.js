import React from "react";
import { Link } from "react-router-dom";
import "./Shoutouts.css";

export default function Welcome() {
  return (
    <div className="welcome">
      <Link className="button" to="/shoutouts">
        <div className="button-container">Version 1</div>
      </Link>

      <Link className="button" to="/shoutouts">
        <div className="button-container">Version 2</div>
      </Link>
    </div>
  );
}

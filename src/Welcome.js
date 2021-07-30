import React from "react";
import { Link } from "react-router-dom";
import "./Shoutouts.css";

export default function Welcome() {
  return (
    <div className="page-container">
      <div className="header">WALL OF GRATITUDE</div>
      <div className="welcome">
        <Link className="button" to="/submission">
          <div className="button-container">Version A</div>
        </Link>

        <Link className="button" to="/submission">
          <div className="button-container">Version B</div>
        </Link>
      </div>
    </div>
  );
}

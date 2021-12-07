import React from "react";
import { Link } from "react-router-dom";
import "./roundButton.scss";

function RoundButton() {
  return (
      <Link to='/destination'>
    <div className="round-button j5">
      <h4>explore</h4>
      <span className="round-button__border"></span>
    </div>
    </Link>
  );
}

export default RoundButton;

import React from "react";
import "./ProgressBar.css";

function ProgressBar(props) {
  console.log(props.size);
  return (
    <div className="progress-bar">
      <span
        className="progress-element"
        style={{ width: `${props.fill}%` }}
      ></span>
    </div>
  );
}

export default ProgressBar;

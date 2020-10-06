import React from "react";
import "./ProgressBar.css";

function ProgressBar(props) {
  return (
    <div className="progress-bar">
      {[...Array(props.size).keys()].map((key) => (
        <span
          id={key}
          className={`progress-element progress-element-${
            key < props.fill ? "full" : "empty"
          }`}
        ></span>
      ))}
    </div>
  );
}

export default ProgressBar;

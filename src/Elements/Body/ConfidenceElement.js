import React from "react";
import ProgressBar from "./ProgressBar";
import "./ConfidenceElement.css";

function ConfidenceElement(props) {
  return (
    <div>
      <div className="element-name">{props.name}</div>
      <ProgressBar size={4} fill={props.info.confidence} />
    </div>
  );
}

export default ConfidenceElement;

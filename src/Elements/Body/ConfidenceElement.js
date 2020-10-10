import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./ConfidenceElement.css";

function ConfidenceElement(props) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
      >
        <div className="element-name">{props.name}</div>
        <ProgressBar fill={props.info.confidence} />
      </div>
      {showMessage && <div className="info-box">{props.info.info}</div>}
    </div>
  );
}

export default ConfidenceElement;

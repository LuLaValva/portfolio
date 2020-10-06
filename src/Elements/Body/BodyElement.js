import React from "react";
import "./BodyElement.css";

function BodyElement(props) {
  return (
    <div className="body-element">
      <h2 className="body-element-title">{props.title}</h2>
      {props.children}
    </div>
  );
}

export default BodyElement;

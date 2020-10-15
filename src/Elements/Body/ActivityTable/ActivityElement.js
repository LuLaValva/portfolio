import React from "react";
import "./ActivityElement.css";

function ActivityElement(props) {
  return (
    <div class="activity-container">
      <div class="activity-title">
        <div>
          <b>{props.info.title}</b> at {props.info.location}
        </div>
        <div>{props.info.timeframe}</div>
      </div>
      <p>{props.info.info}</p>
    </div>
  );
}

export default ActivityElement;

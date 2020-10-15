import React from "react";
import ActivityElement from "./ActivityElement";

function ActivityTable(props) {
  return props.info.map((item) => (
    <ActivityElement info={item}></ActivityElement>
  ));
}

export default ActivityTable;

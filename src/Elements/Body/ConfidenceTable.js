import React from "react";
import ConfidenceElement from "./ConfidenceElement";

function ConfidenceTable(props) {
  return Object.entries(props.info).map(([key, val]) => (
    <ConfidenceElement key={key} name={key} info={val} />
  ));
}

export default ConfidenceTable;

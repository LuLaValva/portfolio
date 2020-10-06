import React from "react";
import "./Body.css";
import BodyElement from "./BodyElement";
import ProgrammingLanguages from "../../FrequentlyUpdatedInfo/programmingLanguages";

function Body() {
  return (
    <div id="body">
      <BodyElement title="Education">Testing Body Element</BodyElement>
      <BodyElement title="Favorite Programming Languages">
        {JSON.stringify(ProgrammingLanguages)}
      </BodyElement>
      <BodyElement title="Employment History">Employment</BodyElement>
      <BodyElement title="Related Experience">Experience</BodyElement>
      <BodyElement title="Honors, Awards, Acheivements">
        Some Acheivements
      </BodyElement>
    </div>
  );
}

export default Body;

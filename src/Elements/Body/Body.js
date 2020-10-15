import React from "react";
import "./Body.css";
import BodyElement from "./BodyElement";
import ProgrammingLanguages from "../../FrequentlyUpdatedInfo/programmingLanguages";
import FamiliarSoftware from "../../FrequentlyUpdatedInfo/familiarSoftware";
import ConfidenceTable from "./ConfidenceTable/ConfidenceTable";

function Body() {
  return (
    <div id="body">
      <BodyElement title="About Me">
        <p>
          Hello! My name is Luke LaValva. I'm currently a full time student at
          Rowan University with a double major in Computer Science and
          Mathematics, and a minor in Sociology. I haven't entirely decided on
          something to dedicate my life to yet, mostly because it seems as
          though I'm passionate about <i>everything</i>. The most recent
          additions to my assortment of interests are 3d modeling software, most
          particularly Blender.
        </p>
      </BodyElement>
      <BodyElement title="Programming Languages">
        <ConfidenceTable info={ProgrammingLanguages} />
      </BodyElement>
      <BodyElement title="Software">
        <ConfidenceTable info={FamiliarSoftware} />
      </BodyElement>
      <BodyElement title="Employment">Employment</BodyElement>
      <BodyElement title="Related Experience">Experience</BodyElement>
      <BodyElement title="Education">Education</BodyElement>
      <BodyElement title="Honors, Awards, Acheivements">
        Some Acheivements
      </BodyElement>
    </div>
  );
}

export default Body;

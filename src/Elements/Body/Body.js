import React from "react";
import "./Body.css";
import BodyElement from "./BodyElement";
import ConfidenceTable from "./ConfidenceTable/ConfidenceTable";
import ActivityTable from "./ActivityTable/ActivityTable";

import ProgrammingLanguages from "../../FrequentlyUpdatedInfo/programmingLanguages";
import FamiliarSoftware from "../../FrequentlyUpdatedInfo/familiarSoftware";
import CurrentInvolvement from "../../FrequentlyUpdatedInfo/currentInvolvement";
import RelatedExperience from "../../FrequentlyUpdatedInfo/relatedExperience";

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
      <BodyElement title="Current Involvement">
        <ActivityTable info={CurrentInvolvement} />
      </BodyElement>
      <BodyElement title="Related Experience">
        <ActivityTable info={RelatedExperience} />
      </BodyElement>
      <BodyElement title="Education">Education</BodyElement>
      {/*<BodyElement title="Honors, Awards, Acheivements">Some Acheivements</BodyElement>*/}
    </div>
  );
}

export default Body;

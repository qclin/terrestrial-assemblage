import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function ProgramBackground({ search }) {
  return (
    <div className="grid fixed inset-0" style={{ zIndex: -20 }}>
      <StaticImage
        style={{ gridArea: "1/1", maxHeight: "100vh" }}
        layout="fullWidth"
        src={"../../assets/images/background/7-LEAFY.jpg"}
        alt="pond"
      />
      <StaticImage
        style={{ gridArea: "1/1", height: "100vh" }}
        layout="constrained"
        alt="Reflections of the Rain pavillion on Algea debris"
        src={"../../assets/images/algea/program.png"}
      />
    </div>
  );
}

export default ProgramBackground;

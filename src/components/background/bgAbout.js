import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function AboutBackground() {
  return (
    <div className="grid fixed top-0" style={{ zIndex: -20 }}>
      <StaticImage
        style={{ gridArea: "1/1" }}
        layout="fullWidth"
        src={"../../assets/images/background/2-RIPPLES.jpg"}
        alt="pond"
      />
      <StaticImage
        style={{ gridArea: "1/1", height: "100vh" }}
        layout="constrained"
        alt="Reflections of the Rain pavillion on Algea debris"
        src={"../../assets/images/algea/main.png"}
      />
    </div>
  );
}

export default AboutBackground;

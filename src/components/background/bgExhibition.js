import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function ExhibitionBackground() {
  return (
    <div className="grid fixed top-0" style={{ zIndex: -20 }}>
      <StaticImage
        style={{ gridArea: "1/1" }}
        layout="fullWidth"
        src={"../../assets/images/background/4-DRIP.jpg"}
        alt="pond"
      />
      <StaticImage
        style={{ gridArea: "1/1", height: "100vh" }}
        layout="constrained"
        alt="Reflections of the Rain pavillion on Algea debris"
        src={"../../assets/images/algea/Web_Symposium.png"}
      />
    </div>
  );
}

export default ExhibitionBackground;

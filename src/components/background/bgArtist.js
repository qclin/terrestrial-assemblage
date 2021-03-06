import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function ArtistBackground() {
  return (
    <div className="grid fixed inset-0" style={{ zIndex: -20 }}>
      <StaticImage
        style={{ gridArea: "1/1" }}
        layout="fullWidth"
        src={"../../assets/images/background/6-MUDDY.jpg"}
        alt="pond"
      />
      <StaticImage
        style={{ gridArea: "1/1", height: "100vh" }}
        layout="constrained"
        alt="Reflections of the Rain pavillion on Algea debris"
        src={"../../assets/images/algea/artist-profile.png"}
      />
    </div>
  );
}

export default ArtistBackground;

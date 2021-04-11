import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const SITE_NAME = "terrestrial assemblage";

function Hero() {
  return (
    <div className="grid fixed" style={{ zIndex: -20 }}>
      <StaticImage
        style={{ gridArea: "1/1" }}
        layout="fullWidth"
        alt="Floating University pond with micro-ecoloogies"
        src={"../images/background/1-WORM-LT.jpg"}
      />
      <div
        className="grid relative place-items-center"
        style={{
          gridArea: "1/1",
        }}
      >
        <title>{SITE_NAME}</title>
        <marquee width="100%" direction="left" scrollamount="1">
          <h1 className="text-9xl text-white" style={{ fontSize: 400 }}>
            {SITE_NAME.toUpperCase()}
          </h1>
        </marquee>
      </div>
    </div>
  );
}

export default Hero;

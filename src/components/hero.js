import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const SITE_NAME = "terrestrial assemblage";

function Hero() {
  const [scrollY, setScollY] = useState(0);
  const handlePageScroll = (event) => {
    console.log("[handlePageScroll]scrollY  ", window.scrollY);
    setScollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
    return () => {
      window.removeEventListener("scroll", handlePageScroll);
    };
  }, []);

  return (
    <div className="grid fixed top-0" style={{ zIndex: -20 }}>
      <StaticImage
        style={{ gridArea: "1/1" }}
        layout="fullWidth"
        height={"100%"}
        alt="Floating University pond with micro-ecoloogies"
        src={"../assets/images/background/1-WORM-LT.jpg"}
      />
      <div
        className="grid relative place-items-center"
        style={{
          gridArea: "1/1",
        }}
      >
        <title>{SITE_NAME}</title>
        <marquee width="100%" direction="left" scrollamount="1">
          <h1
            className="text-9xl text-white"
            style={{ fontSize: 400, filter: `blur(${scrollY / 200}px)` }}
          >
            {SITE_NAME.toUpperCase()}
          </h1>
        </marquee>
      </div>
      <StaticImage
        style={{ gridArea: "1/1" }}
        layout="fullWidth"
        alt="Reflections of the Rain pavillion on Algea debris"
        src={"../assets/images/background/algea_cropped.png"}
      />
    </div>
  );
}

export default Hero;

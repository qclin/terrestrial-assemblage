import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import TerrestrialTextSvg from "../assets/svgs/headers/terrestrial.svg";

const SITE_NAME = "terrestrial assemblage";

function Hero() {
  const [scrollY, setScollY] = useState(0);
  const handlePageScroll = (event) => {
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
        style={{ gridArea: "1/1", height: "100vh" }}
        layout="constrained"
        alt="Floating University pond with micro-ecoloogies"
        src={"../assets/images/background/1-WORM-LT.jpg"}
        placeholder="blurred"
      />
      <div
        className="grid relative place-items-center"
        style={{
          gridArea: "1/1",
        }}
      >
        <marquee width="100%" direction="left" scrollamount="1">
          <TerrestrialTextSvg
            style={{
              height: "50vh",
              filter: `blur(${scrollY / 200}px)`,
            }}
          />
        </marquee>
      </div>
      <StaticImage
        style={{ gridArea: "1/1", height: "100vh" }}
        layout="constrained"
        alt="Reflections of the Rain pavillion on Algea debris"
        src={"../assets/images/background/algea_cropped.png"}
        placeholder="blurred"
      />
    </div>
  );
}

export default Hero;

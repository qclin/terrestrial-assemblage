import React, { useEffect, useState } from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import TerrestrialTextSvg from "../assets/svgs/headers/terrestrial.svg";
import { useStaticQuery, graphql } from "gatsby";

function BackgroundImage({ imageNode }) {
  const bgImage = getImage(imageNode);
  return (
    <GatsbyImage
      style={{ gridArea: "1/1", height: "100vh" }}
      image={bgImage}
      alt="Floating University pond with micro-ecoloogies"
    />
  );
}

export default BackgroundImage;

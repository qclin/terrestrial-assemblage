import React from "react";
import sample from "lodash/sample";
import clsx from "clsx";
import { Link } from "gatsby-plugin-react-i18next";

const CLASSES = {
  overlay: "w-full h-full absolute filter blur-xl bg-button left-0",
};

const HomeFeature = ({ featureJson, clImages }) => {
  const { secure_url, height, width, public_id } = sample(clImages).node;
  const feature = featureJson.find((item) => public_id.includes(item.key));

  return (
    <Link to={feature.path}>
      <figure
        className="mx-10 relative text-left"
        style={{ width: "fit-content" }}
      >
        <div
          className={CLASSES.overlay}
          style={{
            padding: "5rem",
            borderRadius: "6px",
            filter: "blur(16px)",
          }}
        ></div>
        <figcaption className="text-white text-sm bg-button text-wrap">
          {feature.tagline}
        </figcaption>
        <img
          src={secure_url}
          layout="fullWidth"
          className={clsx([
            width > height ? "w-80 h-auto" : "h-80 w-auto mx-auto",
          ])}
          style={{ filter: "grayscale(1)" }}
          alt={public_id}
        />
      </figure>
    </Link>
  );
};

export default HomeFeature;

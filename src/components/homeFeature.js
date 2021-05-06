import React, { useState, useCallback, useEffect } from "react";
import sample from "lodash/sample";
import clsx from "clsx";
import { Link } from "gatsby-plugin-react-i18next";

const CLASSES = {
  overlay: "w-full h-full absolute filter blur-xl bg-button left-0",
};

const HomeFeature = ({ featureJson, clImages }) => {
  const [feature, setFeature] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    reloadPhoto();
  }, []);

  const reloadPhoto = useCallback(() => {
    const clImage = sample(clImages).node;
    setImage(clImage);

    const tmp = featureJson.find((item) =>
      clImage.public_id.includes(item.key)
    );
    setFeature(tmp);
  }, [clImages]);

  if (!feature || !image) return null;
  return (
    <Link to={feature.path}>
      <figure
        className="p-6 md:p-10 text-left relative"
        style={{ width: "fit-content" }}
      >
        <div
          className={CLASSES.overlay}
          style={{
            padding: "5rem",
            borderRadius: "6px",
            filter: "blur(16px)",
            zIndex: -10,
          }}
        ></div>
        <figcaption className="text-white text-sm text-wrap w-auto md:max-w-sm">
          {feature.tagline}
        </figcaption>
        <img
          src={image.secure_url}
          layout="fullWidth"
          className={clsx([
            image.width > image.height ? "w-96 h-auto" : "h-96 w-auto mx-auto",
          ])}
          style={{ filter: "grayscale(1)" }}
          alt={image.public_id}
        />
      </figure>
    </Link>
  );
};

export default HomeFeature;

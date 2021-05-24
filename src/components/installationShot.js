import React from "react";
import clsx from "clsx";
import { Link } from "gatsby-plugin-react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "../styles/exhibition.css"; //eslint-disable-line no-unused-vars
import NameVector from "../components/nameVector";


const CLASSES = {
  linkOverlay: "w-full h-24 absolute filter blur-lg bg-button left-0",
};


const InstallationShot = ({artistKey, artist, images }) => {
  return (
    <section id={artistKey}>
      <Link to={`/artist?id=${artist.identifier}`}>
        <div
          className="sticky top-0 z-10 mx-auto"
          style={{ width: "fit-content", position: "-webkit-sticky" }}
        >
          <div
            className={CLASSES.linkOverlay}
            style={{
              mixBlendMode: "color",
              borderRadius: "6px",
              filter: "blur(16px)",
            }}
          ></div>
          <NameVector
            identifier={artist.identifier}
            className="sticky top-0 block h-10 md:h-16 md:inline mx-auto md:mx-0"
            title
          />
          <div className="text-white uppercase mb-4">
            {artist.title}
          </div>
        </div>
      </Link>

      {images.map((image, idx) => (
        <figure
          key={image.node.public_id}
          className={clsx(
            idx !== images.length - 1 && "mb-4"
          )}
        >
          <img src={image.node.secure_url} alt={image.key} />
          <figcaption className="text-left text-white mb-4 mx-auto text-sm bg-button rounded-sm">
          {image.node.context.custom.alt}
        </figcaption>
        </figure>
      ))}


    </section>
  );
}

export default InstallationShot
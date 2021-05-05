import React, { useState, useRef, useEffect, useCallback } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import clsx from "clsx";
import { Link } from "gatsby-plugin-react-i18next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "../styles/exhibition.css"; //eslint-disable-line no-unused-vars
import NameVector from "../components/nameVector";
import { ARTISTS } from "../constants/constants";

const CLASSES = {
  linkOverlay: "w-full h-24 absolute filter blur-lg hover:bg-button left-0",
};

const ExhibitionPage = ({ location, data }) => {
  const clImages = data.images.edges;
  const [activeArrow, setActiveArrow] = useState();
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const [artist, setArtist] = useState(ARTISTS[0]);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    centerMode: true,
    lazyLoad: true,
    afterChange: (current) => setActiveIndex(current),
  };

  const slideToArtist = useCallback(() => {
    const searchId = location.hash?.substring(1);
    if (searchId) {
      const searchIndex = clImages.findIndex(
        (image) => image.node.public_id.split("/")[2] === searchId
      );
      sliderRef.current.slickGoTo(searchIndex);
      setActiveIndex(searchIndex);
    }
  }, [location.hash, sliderRef, clImages]);

  useEffect(() => {
    if (sliderRef) slideToArtist();
  }, [location.hash, sliderRef, slideToArtist]);

  const updateTitles = useCallback(() => {
    const artistKey = clImages[activeIndex].node.public_id.split("/")[2];
    const activeArtist = ARTISTS.find(
      (artist) => artist.identifier === artistKey
    );
    setArtist(activeArtist);
  }, [clImages, activeIndex]);

  useEffect(() => {
    updateTitles();
  }, [activeIndex, updateTitles]);

  const checkMousePosition = (event) => {
    const posX = event.pageX;

    const pageWidth = window.innerWidth;
    if (posX < pageWidth / 4) {
      setActiveArrow("left");
    } else if (posX > pageWidth * 0.75) {
      setActiveArrow("right");
    } else {
      setActiveArrow(undefined);
    }
  };

  const swipe = () => {
    if (activeArrow === "left") {
      sliderRef.current.slickPrev();
    } else if (activeArrow === "right") {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Layout canGoBack>
      <div className="grid fixed inset-0 w-full h-full" style={{ zIndex: -20 }}>
        <StaticImage
          style={{ gridArea: "1/1" }}
          layout="fullWidth"
          src={"../assets/images/background/5-DRIP.jpg"}
          alt="pond"
        />
      </div>
      <main
        onMouseMove={checkMousePosition}
        onClick={swipe}
        className="pt-16 md:pt-24 w-full"
        style={{
          gridArea: "1/1",
        }}
      >
        <section className="text-center align-center">
          <Link className="relative" to={`/artist?id=${artist.identifier}`}>
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
              className="block h-10 md:h-16 md:inline mx-auto md:mx-0"
              title
            />
            <div className="text-white uppercase mb-4">{artist.title}</div>
          </Link>
        </section>
        <Slider
          {...settings}
          className={clsx([activeArrow, "h-full"])}
          ref={sliderRef}
        >
          {clImages.map((image) => {
            const ratio = image.node.width / image.node.height;

            const width = ratio * 600;

            return (
              <div style={{ width }} key={image.node.public_id.split("/")[2]}>
                <img
                  className="mx-1 px-2 focus:outline-none"
                  src={image.node.secure_url}
                  alt={image.key}
                />
              </div>
            );
          })}
        </Slider>
      </main>
    </Layout>
  );
};

export default ExhibitionPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    images: allCloudinaryMedia(
      filter: { public_id: { regex: "artworks(?s)(.*)/teaser/" } }
    ) {
      edges {
        node {
          secure_url
          public_id
          width
          height
        }
      }
    }
  }
`;

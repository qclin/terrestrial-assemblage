import React, { useState, useRef, useEffect, useCallback } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import clsx from "clsx";
import { Link } from "gatsby-plugin-react-i18next";
import groupBy from "lodash/groupBy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "../styles/exhibition.css"; //eslint-disable-line no-unused-vars
import NameVector from "../components/nameVector";
import { ARTISTS } from "../constants/constants";
import { BrowserView, MobileView, isMobile } from "react-device-detect";

const CLASSES = {
  linkOverlay: "w-full h-24 absolute filter blur-lg bg-button left-0",
};

const ExhibitionPage = ({ location, data }) => {
  const clImages = data.images.edges;
  const [activeArrow, setActiveArrow] = useState();
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const [artist, setArtist] = useState(ARTISTS[0]);

  const settings = {
    infinite: true,
    slidesToShow: isMobile ? 2 : 1,
    variableWidth: true,
    slidesToScroll: 1,
    centerMode: true,
    lazyLoad: false,
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
    if (sliderRef.current) slideToArtist();
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

  const byArtist = groupBy(clImages, (img) => img.node.public_id.split("/")[2]);

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
        className="pt-16 md:pt-24 w-full mb-10"
        style={{
          gridArea: "1/1",
        }}
      >
        <BrowserView>
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
                <figure
                  style={{ width: isMobile ? "100%" : width }}
                  key={image.node.public_id}
                  className="outline-none"
                >
                  <img
                    className="md:mx-1 md:px-2 focus:outline-none"
                    src={image.node.secure_url}
                    alt={image.key}
                  />
                </figure>
              );
            })}
          </Slider>
          <figcaption className="text-white md:w-1/2 mb-4 mx-auto text-sm rounded-sm">
            {artist.caption}
          </figcaption>
        </BrowserView>
        <MobileView
          className="mx-7 overflow-scroll image-wrapper"
          style={{ height: "70vh" }}
          onScroll={(e) => {
            console.log(" SCROLLED", e);
          }}
        >
          {Object.keys(byArtist).map((artistKey) => {
            const tmpArtist = ARTISTS.find(
              (artist) => artist.identifier === artistKey
            );

            return (
              <section className="text-center align-center relative">
                <Link to={`/artist?id=${tmpArtist.identifier}`}>
                  <div
                    className="sticky top-0 z-10 mx-auto"
                    style={{ width: "fit-content " }}
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
                      identifier={tmpArtist.identifier}
                      className="block h-10 md:h-16 md:inline mx-auto md:mx-0"
                      title
                    />
                    <div className="text-white uppercase mb-4">
                      {artist.title}
                    </div>
                  </div>
                </Link>

                {byArtist[artistKey].map((image) => (
                  <figure key={image.node.public_id} className="mb-4">
                    <img src={image.node.secure_url} alt={image.key} />
                  </figure>
                ))}
                {/* <div className="h-1/2 fixed left-0 bottom-0 filter grayscale w-full"></div> */}
                <figcaption className="text-left text-white mb-4 mx-auto text-sm bg-button rounded-sm sticky bottom-0">
                  {tmpArtist.caption}
                </figcaption>
              </section>
            );
          })}
        </MobileView>
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
      filter: { public_id: { regex: "artworks(?s)(.*)/installation/" } }
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

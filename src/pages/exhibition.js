import React, { useState, useRef } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "../styles/exhibition.css"; //eslint-disable-line no-unused-vars
import NameVector from "../components/nameVector";

const ExhibitionPage = ({ data }) => {
  const clImages = data.images.edges;
  const [activeArrow, setActiveArrow] = useState();
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    centerMode: true,
    lazyLoad: true,
    afterChange: (current) => setActiveIndex(current),
  };

  const artistKey = clImages[activeIndex].node.public_id.split("/")[2];

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
    <Layout>
      <main
        onMouseMove={checkMousePosition}
        onClick={swipe}
        className="bg-black"
      >
        <section className="text-center align-center">
          <NameVector
            identifier={artistKey}
            className="block h-14 md:h-24 md:inline mx-auto md:mx-0"
          />
        </section>
        <Slider {...settings} className={activeArrow} ref={sliderRef}>
          {clImages.map((image) => {
            const ratio = image.node.width / image.node.height;
            const width = ratio * 500;
            return (
              <div style={{ width }} key={image.node.public_id}>
                <img
                  className="mx-1 px-1 focus:outline-none"
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

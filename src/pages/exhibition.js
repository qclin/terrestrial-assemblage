import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExhibitionPage = ({ data }) => {
  const clImages = data.images.edges;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: "justify-center",
  };

  return (
    <Layout>
      <main>
        <Slider {...settings}>
          {clImages.map((image) => (
            <img
              className="w-auto h-54"
              key={image.node.public_id}
              src={image.node.secure_url}
              alt={image.key}
            />
          ))}
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
        }
      }
    }
  }
`;

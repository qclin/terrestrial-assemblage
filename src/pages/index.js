import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Introduction from "../components/introduction";
import Hero from "../components/background/hero";
import HomeFeature from "../components/homeFeature";
import * as styles from "../styles/home.css"; //eslint-disable-line no-unused-vars
import StackedTATextSvg from "../assets/svgs/headers/Stacked-TA.svg";
import Video from "../components/video";
import { LIVESTREAM_URL } from "../constants/constants";
import { Link } from "gatsby-plugin-react-i18next";

const IndexPage = ({ data }) => {
  const clImages = data.images.edges;

  return (
    <Layout>
      <Hero />
      <main>
        <StackedTATextSvg className="mx-4 mt-24 md:hidden" />
        <section className="md:fixed md:right-20 md:inset-y-1/4 mt-8 md:mt-0">
          {/* <HomeFeature
            featureJson={data.feature.features}
            clImages={clImages}
          /> */}
          <Link to="/livestream">
            <div
              className="float-item mx-auto"
              style={{ width: "fit-content" }}
            >
              <Video
                style={{ height: "300px", width: "500px" }}
                className="mx-auto mt-24 p-2 md:p-2 bg-algea-tint shadow-sm shadow-tintAlgea rounded-sm"
                videoSrcURL={LIVESTREAM_URL + "&controls=0"}
                videoTitle="livestream of the symposium"
              />
            </div>
          </Link>
        </section>
        <Introduction />
      </main>
    </Layout>
  );
};

export default IndexPage;

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
      filter: { public_id: { regex: "/(/feature/)/" } }
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

    feature: featuresJson(language: { eq: $language }) {
      features {
        key
        path
        tagline
      }
    }
  }
`;

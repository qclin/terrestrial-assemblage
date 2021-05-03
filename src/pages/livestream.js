import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BackgroundImage from "../components/background/bgAbout";
import Video from "../components/video";

const LivestreamPage = () => {
  return (
    <Layout>
      <BackgroundImage />

      <Video
        style={{ height: "75vh" }}
        className="mx-auto md:mt-24 p-2 md:p-7 bg-white-tint shadow-2xl shadow-whiteTint rounded-md w-4/5"
        videoSrcURL=""
        videoTitle="livestream of the symposium"
      />
      <main></main>
    </Layout>
  );
};

export default LivestreamPage;

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
  }
`;

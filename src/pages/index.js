import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Introduction from "../components/introduction";
import Hero from "../components/background/hero";
import HomeFeature from "../components/homeFeature";
import * as styles from "../styles/home.css"; //eslint-disable-line no-unused-vars

const IndexPage = ({ data }) => {
  const clImages = data.images.edges;

  return (
    <Layout>
      <Hero />
      <main>
        <section className="md:fixed md:right-20 md:inset-y-1/4 mt-24 md:mt-0">
          <HomeFeature
            featureJson={data.feature.features}
            clImages={clImages}
          />
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

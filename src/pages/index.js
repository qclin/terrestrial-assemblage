import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Hero from "../components/hero";
import AboutSection from "../components/about";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <main>
        <AboutSection />
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
  }
`;

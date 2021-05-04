import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Introduction from "../components/introduction";
import Hero from "../components/background/hero";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <main>
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
  }
`;

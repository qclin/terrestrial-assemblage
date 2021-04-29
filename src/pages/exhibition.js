import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const ExhibitionPage = () => {
  return (
    <Layout>
      <main></main>
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
  }
`;

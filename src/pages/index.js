import * as React from "react";
import Layout from "../components/layout";
import { Trans } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

const SITE_NAME = "terrestrial assemblage";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>{SITE_NAME}</title>
        <marquee width="100%" direction="left" scrollamount="1">
          <h1
            className="text-9xl text-white"
            style={{
              fontSize: 400,
            }}
          >
            {SITE_NAME.toUpperCase()}
          </h1>
        </marquee>
      </main>
      <div>
        <Trans> Landing Page index js here </Trans>
      </div>
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

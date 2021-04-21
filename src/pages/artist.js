import React from "react";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import { graphql, navigate } from "gatsby";
import * as queryString from "query-string";

const ArtistPage = ({ location, data }) => {
  const { language } = useI18next();

  const { id } = queryString.parse(location.search);
  console.log(id, data);

  const profileNode = data.allMarkdownRemark.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/${language}/artists/${id}`)
  );

  return (
    <Layout>
      <main className="mx-8">
        <button className="mt-20" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <h1 className="text-9xl">
          <Trans>{id}</Trans>
        </h1>

        <div className="md:grid md:grid-cols-3 gap-4">
          <div className="col-start-3">
            <div dangerouslySetInnerHTML={{ __html: profileNode.html }} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ArtistPage;

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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(artists)/" } }) {
      nodes {
        html
        fileAbsolutePath
      }
    }
  }
`;

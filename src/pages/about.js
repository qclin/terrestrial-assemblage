import * as React from "react";
import Layout from "../components/layout";
import { Trans } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <title>
          <Trans>About</Trans>
        </title>
        <div className="grid grid-cols-3 gap-4">
          <p className="bg-white col-span-2 m-10 px-5 py-10 rounded-xl shadow-md shadow-white">
            <Trans>curatoritorial statement</Trans>
          </p>
        </div>
      </main>
      <div>
        <div class="grid grid-cols-6 gap-4">
          <div class="col-start-2 col-span-4 ...">1</div>
          <div class="col-start-1 col-end-3 ...">2</div>
          <div class="col-end-7 col-span-2 ...">3</div>
          <div class="col-start-3 col-end-7 ...">4</div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const aboutQuery = graphql`
  query($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "about-page"] }
        language: { eq: $language }
      }
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

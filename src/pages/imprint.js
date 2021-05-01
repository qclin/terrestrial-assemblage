import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Partners from "../components/partners";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import * as styles from "../styles/imprint.css"; //eslint-disable-line no-unused-vars
import DEImprintSVG from "../assets/svgs/headers/de/subheader/Impressum.svg";
import ImprintSVG from "../assets/svgs/headers/en/subheader/Imprint.svg";

const CLASSES = {
  svgHeader: "max-h-24 mt-16",
  textGrid: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
  textBox: "rounded-lg px-8 py-4 shadow-whiteTint shadow-md bg-white-tint",
};

const ImprintPage = ({ data }) => {
  const { language } = useI18next();
  const isGerman = language === "de";

  const markdownNodes = data.allMarkdownRemark.nodes
    .filter((n) => n.fileAbsolutePath.includes(`/${language}/`))
    .sort((n) => n.fileAbsolutePath);

  const ImprintVector = isGerman ? DEImprintSVG : ImprintSVG;

  return (
    <Layout>
      <div className="grid fixed top-0 w-full h-full" style={{ zIndex: -20 }}>
        <StaticImage
          style={{ gridArea: "1/1" }}
          layout="fullWidth"
          src={"../assets/images/background/2-RIPPLES.jpg"}
          alt="pond"
        />
      </div>
      <main className="mx-5 md:mx-32">
        <ImprintVector className={CLASSES.svgHeader} />
        <section className={CLASSES.textBox}>
          <b>
            <Trans>TEAM</Trans>
          </b>
          <div className={CLASSES.textGrid}>
            {markdownNodes.map((node) => (
              <div
                className="p-2 descriptions"
                dangerouslySetInnerHTML={{ __html: node.html }}
              />
            ))}
          </div>
        </section>
        <section className="mx-10">
          <Partners />
        </section>
      </main>
    </Layout>
  );
};

export default ImprintPage;

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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(imprint)/" } }
      sort: { order: ASC, fields: fileAbsolutePath }
    ) {
      nodes {
        fileAbsolutePath
        html
      }
    }
  }
`;

import * as React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import AboutSVG from "../assets/svgs/headers/en/subheader/About.svg";
import ExhibitionSVG from "../assets/svgs/headers/en/subheader/Exhibition-Venue.svg";
import DEAboutSVG from "../assets/svgs/headers/de/subheader/Uber.svg";
import DEExhibitionSVG from "../assets/svgs/headers/de/subheader/Austellungsort.svg";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BackgroundImage from "../components/background/bgAbout";

const CLASSES = {
  svgHeader: "max-w-full max-h-36 mb-5",
  textBox:
    "m-10 p-5 md:py-10 rounded-lg shadow-whiteTint shadow-md bg-white-tint",
};
const AboutPage = ({ data }) => {
  const { language } = useI18next();
  const isGerman = language === "de";

  const aboutMDNode = data.allMarkdownRemark.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/${language}/main/about`)
  );

  const exhibitionVenueMDNode = data.allMarkdownRemark.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/${language}/main/exhibitionVenue`)
  );

  return (
    <Layout>
      <BackgroundImage />
      <section className="md:grid md:grid-cols-10 gap-4 m-10">
        <div className="md:col-span-5 ">
          {isGerman ? (
            <DEAboutSVG className="max-w-full max-h-36 mb-5" />
          ) : (
            <AboutSVG className="max-w-full max-h-36 mb-5" />
          )}
          <div className={CLASSES.textBox}>
            <div dangerouslySetInnerHTML={{ __html: aboutMDNode.html }} />
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-1 md:py-10">
          {isGerman ? (
            <DEExhibitionSVG className="max-h-36 mb-5 max-w-full" />
          ) : (
            <ExhibitionSVG className="max-h-36 mb-5 max-w-full" />
          )}
          <div className={CLASSES.textBox}>
            <div
              dangerouslySetInnerHTML={{ __html: exhibitionVenueMDNode.html }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(main)/" } }) {
      nodes {
        fileAbsolutePath
        html
      }
    }
  }
`;

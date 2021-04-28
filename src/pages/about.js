import * as React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import AboutText from "../assets/svgs/headers/en/about.svg";
import ExhibitionText from "../assets/svgs/headers/en/exhibition.svg";
import DEAboutText from "../assets/svgs/headers/de/about.svg";
import DEExhibitionText from "../assets/svgs/headers/de/exhibition.svg";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BackgroundImage from "../components/background/bgAbout";

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
      <section className="md:grid md:grid-cols-10 gap-4">
        <div className="md:col-span-6">
          <div className="bg-white m-10 p-5 md:py-10 rounded-xl shadow-md shadow-white">
            {isGerman ? (
              <DEAboutText className="max-w-full max-h-36 mb-5" />
            ) : (
              <AboutText className="max-w-full max-h-36 mb-5" />
            )}
            <div dangerouslySetInnerHTML={{ __html: aboutMDNode.html }} />
          </div>
        </div>
        <div className="md:col-span-6 md:py-10">
          <div className="bg-white m-10 px-5 py-10 rounded-xl shadow-md shadow-white">
            {isGerman ? (
              <DEExhibitionText className="max-h-36 mb-5 max-w-full mr-auto" />
            ) : (
              <ExhibitionText className="max-h-36 mb-5 max-w-full mr-auto" />
            )}
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

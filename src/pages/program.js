import * as React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import TalkRow from "../components/talkRow";
import * as styles from "../styles/program.css"; //eslint-disable-line no-unused-vars
import BackgroundImage from "../components/background/bgProgram";
import clsx from "clsx";
import TitleSVG from "../assets/svgs/headers/symposium-title.svg";
import MobileTitleSVG from "../assets/svgs/headers/symposium-title-mobile.svg";

const CLASSES = {
  textGrid: "md:grid md:grid-cols-3 lg:grid-cols-10 gap-4 gap-y-9",
  textColumn: "md:col-span-2 lg:col-span-5 lg:col-start-1 p-5 m-3",
  textBlock: "bg-white rounded-md shadow-md shadow-white",
};
const ProgramPage = ({ data }) => {
  const { language } = useI18next();
  const markdownNode = data.allMarkdownRemark.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/program/${language}-introduction`)
  );
  const program = data.program;

  return (
    <Layout>
      <BackgroundImage />

      <section
        className="grid relative m-7 pt-16 md:ml-32 md:pt-24 overflow-auto"
        style={{
          gridArea: "1/1",
          height: "100vh",
          scrollbarWidth: "thin",
        }}
      >
        <div>
          <TitleSVG className="max-w-full hidden md:block" />
          <MobileTitleSVG className="block md:hidden" />
        </div>
        <div className={CLASSES.textGrid}>
          <div className={clsx([CLASSES.textBlock, CLASSES.textColumn])}>
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: `<div>${markdownNode.html}</div>`,
              }}
            />
          </div>
        </div>
        <div className={clsx([CLASSES.textGrid, "my-8 md:my-24 pb-28"])}>
          {program.talks.map((talk, index) => (
            <TalkRow talk={talk} key={`talk.${index}`} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProgramPage;

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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(program)/" } }) {
      nodes {
        fileAbsolutePath
        html
      }
    }
    program: programJson(language: { eq: $language }) {
      talks {
        id
        description
        organization
        speaker {
          name
        }
        time
        title
        website
      }
    }
  }
`;

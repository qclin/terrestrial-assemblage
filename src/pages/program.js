import * as React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import TalkRow from "../components/talkRow";
import * as styles from "../styles/program.css";
import BackgroundImage from "../components/background/bgProgram";
import clsx from "clsx";

const CLASSES = {
  textGrid: "md:grid md:grid-cols-3 lg:grid-cols-10 gap-4",
  textColumn: "md:col-span-2 lg:col-span-5 lg:col-start-1 p-5 m-3",
  textBlock: "bg-white rounded-md shadow-md shadow-white",
};
const ProgramPage = ({ data }) => {
  const { language } = useI18next();
  const markdownNode = data.allMarkdownRemark.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/program/${language}-introduction`)
  );
  const program = data.programs.nodes.find((n) => n.language === language);

  return (
    <Layout>
      <BackgroundImage />
      <section
        className="grid relative mx-10 overflow-y-scroll"
        style={{
          gridArea: "1/1",
          height: "100vh",
        }}
      >
        <h1 className="text-7xl text-white mt-10">
          <Trans>Symposium Program</Trans>
          <br />
          <Trans>Ecological Thinking in Border Zones</Trans>
          <br />
          <Trans>18 May 2021, 10am - 6pm</Trans>
          <br />
        </h1>
        <div className={CLASSES.textGrid}>
          <div className={clsx([CLASSES.textBlock, CLASSES.textColumn])}>
            <div dangerouslySetInnerHTML={{ __html: markdownNode.html }} />
          </div>
          <div className={CLASSES.textColumn}>
            {program.talks.map((talk, index) => (
              <TalkRow talk={talk} key={`talk.${index}`} />
            ))}
          </div>
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
    programs: allProgramJson {
      nodes {
        language
        talks {
          id
          description
          speaker
          time
          title
          organization
        }
      }
    }
  }
`;

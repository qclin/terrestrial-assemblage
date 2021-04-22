import * as React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import TalkRow from "../components/talkRow";
import * as styles from "../styles/program.css";

const ProgramPage = ({ data }) => {
  const { language } = useI18next();
  const markdownNode = data.allMarkdownRemark.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/program/${language}-introduction`)
  );
  const program = data.programs.nodes.find((n) => n.language === language);

  return (
    <Layout>
      <title>
        <Trans>Program</Trans>
      </title>
      <section className="m-10">
        <h1 className="text-9xl">
          <Trans>Program</Trans>
        </h1>
        <div className="md:grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="bg-white p-5 md:py-10 rounded-xl shadow-md shadow-white">
              <div dangerouslySetInnerHTML={{ __html: markdownNode.html }} />
            </div>
          </div>
        </div>
        <div>
          {program.talks.map((talk) => (
            <TalkRow talk={talk} />
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
    programs: allProgramJson {
      nodes {
        language
        talks {
          description
          speaker
          time
          title
        }
      }
    }
  }
`;

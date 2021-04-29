import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout";
import { graphql } from "gatsby";
import * as queryString from "query-string";
import clsx from "clsx";
import BackgroundImage from "../components/background/bgTalk";
import { Remarkable } from "remarkable";
import { Link } from "gatsby-plugin-react-i18next";
import NameVector from "../components/nameVector";
import BackIcon from "../assets/svgs/icons/back.svg";

const CLASSES = {
  textGrid: "md:grid md:grid-cols-3 lg:grid-cols-10 gap-4 ml-10",
  textColumn: "md:col-span-2 lg:col-span-5 lg:col-start-1 p-5 m-3",
  textBlock: "bg-white rounded-md shadow-md shadow-white",
};

const TalkPage = ({ location, data }) => {
  const { id, time } = queryString.parse(location.search);

  const talkNode = data.allTalks.talks.find((t) => t.id === id);
  var md = new Remarkable();

  if (!talkNode) return <div>Talk not found</div>;
  return (
    <Layout>
      <BackgroundImage />
      <main>
        <Link className="fixed top-16" to="/program">
          <BackIcon className="ml-5" />
        </Link>

        <section className="mt-24 ml-10 text-white">
          <span className="text-base w-36 inline">{time}</span>
          {talkNode.name && (
            <NameVector identifier={talkNode.name} className="h-24" />
          )}
          <div className="max-w-xl">
            {talkNode.organization}
            <br />
            <span>{talkNode.title}</span>
          </div>
        </section>
        <section className={CLASSES.textGrid}>
          <div
            className={clsx([CLASSES.textColumn, CLASSES.textBlock])}
            dangerouslySetInnerHTML={{
              __html: md.render(talkNode.description),
            }}
          />
        </section>
      </main>
    </Layout>
  );
};

export default TalkPage;

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
    allTalks: programJson(language: { eq: $language }) {
      language
      talks {
        id
        name
        description
        organization
        speaker
        time
        title
      }
    }
  }
`;

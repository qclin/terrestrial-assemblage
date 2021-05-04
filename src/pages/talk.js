import React from "react";

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
  textGrid: "md:grid md:grid-cols-3 lg:grid-cols-10 gap-4",
  textColumn: "md:col-span-2 lg:col-span-4 lg:col-start-1 p-2 mb-10 md:px-8",
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
      <Link className="fixed top-16" to="/program">
        <BackIcon className="ml-5" />
      </Link>
      <main className="m-7 pt-16 md:ml-32 md:pt-24">
        <section className="mb-8 text-center md:text-left text-white">
          <span className="text-base w-36 inline">{time}</span>
          {talkNode.speaker && (
            <NameVector
              identifier={talkNode.speaker.name}
              className="h-14 md:h-24 mx-auto md:mx-0 mb-4"
            />
          )}
          <div className="max-w-xl">
            {talkNode.organization && [talkNode.organization, <br />]}

            <span>⟶ {talkNode.title}</span>
          </div>
        </section>
        <section className={CLASSES.textGrid}>
          <div className={clsx([CLASSES.textColumn, CLASSES.textBlock])}>
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: md.render(talkNode.description),
              }}
            />
          </div>
          <div className={clsx([CLASSES.textColumn, CLASSES.textBlock])}>
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: md.render(talkNode.speaker.biography),
              }}
            />
            {talkNode.website && (
              <a
                href={talkNode.website}
                target="_blank"
                rel="noreferrer"
                className="px-2 bg-button hover:bg-button-hover rounded-sm"
              >
                website
              </a>
            )}
          </div>
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
        description
        organization
        speaker {
          name
          biography
        }
        time
        title
        website
      }
    }
  }
`;

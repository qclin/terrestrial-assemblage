import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout";
import { graphql } from "gatsby";
import * as queryString from "query-string";
import Video from "../components/video";
import { ARTIST_MEDIA } from "../constants/constants";
import clsx from "clsx";
import BackgroundImage from "../components/background/bgArtist";
import NameVector from "../components/nameVector";
import BackIcon from "../assets/svgs/icons/back.svg";
import * as styles from "../styles/artist.css"; //eslint-disable-line no-unused-vars

const CLASSES = {
  imageGrid: "col-span-2 grid grid-flow-row gap-2 md:grid-cols-6 artworks",
  image: "filter grayscale hover:filter-none",
  textBox: "rounded-lg px-8 m-5 shadow-whiteTint shadow-md bg-white-tint",
};

const ArtistPage = ({ location, data }) => {
  const { language } = useI18next();
  const { id } = queryString.parse(location.search);

  const profileNode = data.allMarkdownRemark.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/${language}/artists/${id}`)
  );

  console.log(" ARTIST PAGE ", id, profileNode);
  const clImages = data.images.edges.filter((e) =>
    e.node.public_id.includes(id)
  );
  const externalMedia = ARTIST_MEDIA[id];
  const video = externalMedia?.video;

  return (
    <Layout>
      <BackgroundImage />

      <main>
        <Link className="fixed top-16" to="/artists">
          <BackIcon className="ml-5" />
        </Link>
        <div className="mt-24">
          <NameVector identifier={id} className="h-24" />
        </div>
        <section>
          {video && (
            <Video
              videoSrcURL={video}
              videoTitle="Official Music Video on YouTube"
            />
          )}
        </section>
        <div className="md:grid md:grid-cols-3 gap-4">
          <div className={CLASSES.imageGrid}>
            {clImages.map((image, index) => (
              <div
                key={`${index}-cl`}
                className={clsx(
                  index % 3 === 0 && "col-span-4",
                  index % 2 === 0 && "col-span-2 col-end-6"
                )}
              >
                <img
                  className={CLASSES.image}
                  src={image.node.secure_url}
                  alt={image.key}
                />
              </div>
            ))}
          </div>
          <div className={CLASSES.textBox} style={{ height: "fit-content" }}>
            <div
              dangerouslySetInnerHTML={{
                __html: `<div>${profileNode.html}</div>`,
              }}
            />
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
    images: allCloudinaryMedia {
      edges {
        node {
          secure_url
          public_id
        }
      }
    }
  }
`;

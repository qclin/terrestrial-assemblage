import React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout";
import { graphql, navigate } from "gatsby";
import * as queryString from "query-string";
import Video from "../components/video";
import { ARTIST_MEDIA } from "../constants/constants";
import clsx from "clsx";
import BackgroundImage from "../components/background/bgArtist";

const CLASSES = {
  imageGrid: "col-span-2 grid grid-flow-row gap-2 md:grid-cols-6",
  image: "filter grayscale hover:filter-none",
  textBox:
    "rounded-lg px-8 m-5 shadow-tintAlgea shadow-md bg-gradient-to-b from-algea-tint via-white-tint to-algea-tint",
};

const ArtistPage = ({ location, data }) => {
  const { language } = useI18next();
  const { id } = queryString.parse(location.search);

  const profileNode = data.allMarkdownRemark.nodes.find((n) =>
    n.fileAbsolutePath.includes(`/${language}/artists/${id}`)
  );

  const clImages = data.images.edges.filter((e) =>
    e.node.public_id.includes(id)
  );
  const externalMedia = ARTIST_MEDIA[id];
  const video = externalMedia?.video;

  return (
    <Layout>
      <BackgroundImage />

      <main>
        <button
          className="focus:outline-none fixed top-14"
          onClick={() => navigate(-1)}
        >
          <Trans>Go back</Trans>
        </button>
        <h1 className="text-9xl mt-24 text-white">
          <Trans>{id}</Trans>
        </h1>
        {video && (
          <Video
            videoSrcURL={video}
            videoTitle="Official Music Video on YouTube"
          />
        )}
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
                <img className={CLASSES.image} src={image.node.secure_url} />
              </div>
            ))}
          </div>
          <div className={CLASSES.textBox}>
            <div dangerouslySetInnerHTML={{ __html: profileNode?.html }} />
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

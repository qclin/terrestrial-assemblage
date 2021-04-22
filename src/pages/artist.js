import React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout";
import { graphql, navigate } from "gatsby";
import * as queryString from "query-string";
import Video from "../components/video";
import { ARTIST_MEDIA } from "../constants/constants";

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
      <main className="mx-8">
        <button
          className="mt-20 focus:outline-none"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <h1 className="text-9xl">
          <Trans>{id}</Trans>
        </h1>
        {video && (
          <Video
            videoSrcURL={video}
            videoTitle="Official Music Video on YouTube"
          />
        )}
        <div className="md:grid md:grid-cols-3 gap-4">
          <div className="col-span-2 grid grid-flow-row gap-4">
            {clImages.map((image, index) => (
              <div key={`${index}-cl`} className="">
                <img src={image.node.secure_url} />
              </div>
            ))}
          </div>
          <div className="">
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

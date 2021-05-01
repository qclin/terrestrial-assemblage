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
import { Remarkable } from "remarkable";

const CLASSES = {
  imageGrid: "col-span-2 grid grid-flow-row gap-2 md:grid-cols-6 artworks",
  image: "filter grayscale hover:filter-none",
  textBox:
    "rounded-lg p-2 mb-10 md:px-8 m-5 shadow-whiteTint shadow-md bg-white-tint ",
};

const ArtistPage = ({ location, data }) => {
  const { language } = useI18next();
  const { id } = queryString.parse(location.search);

  const profileNode = data.allProfiles.artists.find((a) => a.key === id);

  console.log("[ArtistPage] ", id, profileNode);
  var md = new Remarkable();

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
          <NameVector identifier={id} className="m-5 h-14 md:h-24" />
        </div>
        {profileNode.associations.map((internalLink) => (
          <Link to={internalLink.path}>{internalLink.label}</Link>
        ))}
        <section>
          {video && (
            <Video
              videoSrcURL={video}
              className="w-full"
              style={{ height: "fit-content" }}
            />
          )}
        </section>
        <div className="m-5 md:m-0 md:grid md:grid-cols-3 md:gap-4">
          <div className={CLASSES.imageGrid}>
            {clImages.map((image, index) => (
              <div
                key={`${index}-cl`}
                className={clsx(
                  index % 3 === 0 && "md:col-span-4",
                  index % 2 === 0 && "md:col-span-2 md:col-end-6"
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
                __html: md.render(profileNode?.description),
              }}
            />
            <a href={profileNode.website}>website</a>
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
    allProfiles: profilesJson(language: { eq: $language }) {
      language
      artists {
        website
        name
        key
        description
        captions {
          caption
          image
        }
        associations {
          label
          path
        }
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

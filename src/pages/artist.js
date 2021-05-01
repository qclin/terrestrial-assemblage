import React, { useEffect, useState } from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout";
import { graphql } from "gatsby";
import * as queryString from "query-string";
import Video from "../components/video";
import BackgroundImage from "../components/background/bgArtist";
import NameVector from "../components/nameVector";
import BgHighlight from "../components/BgHighlight";
import CaptionImage from "../components/CaptionImage";
import BackIcon from "../assets/svgs/icons/back.svg";
import * as styles from "../styles/artist.css"; //eslint-disable-line no-unused-vars
import { Remarkable } from "remarkable";

const CLASSES = {
  imageGrid: "col-span-2 grid grid-flow-row gap-2 md:grid-cols-6 artworks",
  image: "filter grayscale hover:filter-none",
  textBox:
    "rounded-lg p-2 mb-10 md:px-8 m-5 shadow-whiteTint shadow-md bg-white-tint",
};

const ArtistPage = ({ location, data }) => {
  const { language } = useI18next();
  const { id } = queryString.parse(location.search);
  const [profile, setProfile] = useState();
  useEffect(() => {
    const profileNode = data.allProfiles.artists.find((a) => a.key === id);
    if (profileNode) setProfile(profileNode);
  }, [data, id]);

  var md = new Remarkable();

  const clImages = data.images.edges.filter((e) =>
    e.node.public_id.includes(id)
  );

  if (!profile) return null;
  return (
    <Layout>
      <BackgroundImage />
      <main>
        <Link className="fixed top-16" to="/artists">
          <BackIcon className="ml-5" />
        </Link>
        <div className="mt-24 m-5 flex items-end">
          <NameVector identifier={id} className="h-14 md:h-24 md:inline" />
          <div className="inline">
            {profile.associations.map((internalLink) => (
              <BgHighlight className="even:ml-10 mb-2">
                <Link
                  className="text-white mr-4 px-4 uppercase"
                  to={internalLink.path}
                  key={internalLink.label}
                >
                  {internalLink.label}
                </Link>
              </BgHighlight>
            ))}
          </div>
        </div>

        {profile.video && (
          <section>
            <Video
              videoSrcURL={profile.video.url}
              className="max-w-4/5 mx-auto"
            />
            <BgHighlight className="md:ml-24">
              <span className="text-white text-sm">
                {profile.video.caption}
              </span>
            </BgHighlight>
          </section>
        )}
        <div className="m-5 md:m-0 md:grid md:grid-cols-3 md:gap-4">
          <div className={CLASSES.imageGrid}>
            {clImages.map((image, index) => (
              <CaptionImage
                image={image}
                captions={profile.captions}
                key={image.node.public_id}
                index={index}
              />
            ))}
          </div>
          <div className={CLASSES.textBox} style={{ height: "fit-content" }}>
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(profile?.description),
              }}
            />
            <a
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              className="bg-algea"
            >
              website
            </a>
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
        video {
          url
          caption
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

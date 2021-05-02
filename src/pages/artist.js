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
import clsx from "clsx";

const CLASSES = {
  imageGrid: "col-span-2 grid grid-flow-row gap-4 md:grid-cols-6 artworks",
  image: "filter grayscale hover:filter-none",
  textBox:
    "rounded-lg p-2 mb-10 md:px-8 md:ml-3 mt-8 shadow-whiteTint shadow-md bg-white-tint",
  highLightBG: "bg-button hover:bg-button-hover rounded-sm",
  link: "md:even:ml-10 even:block mb-2 mx-auto text-white mr-4 px-4 uppercase",
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

  if (!profile) return <div>Loading</div>;
  return (
    <Layout>
      <BackgroundImage />
      <Link className="fixed top-16" to="/artists">
        <BackIcon className="ml-5" />
      </Link>
      <main className="m-7 md:ml-32 md:pt-24">
        <div className="md:flex md:items-center justify-center md:justify-start">
          <NameVector
            identifier={id}
            className="block h-14 md:h-24 md:inline mx-auto md:mx-0"
          />
          <div className="">
            {profile.associations.map((internalLink) => (
              <Link
                className={clsx([CLASSES.link, CLASSES.highLightBG])}
                to={internalLink.path}
                key={internalLink.label}
              >
                {internalLink.label}
              </Link>
            ))}
          </div>
        </div>

        {profile.video && (
          <section className="md:mr-24 mb-5">
            <Video
              videoSrcURL={profile.video.url}
              className="mx-auto"
              style={{ height: "75vh" }}
            />

            <div
              className="text-white text-sm bg-button"
              style={{ width: "fit-content" }}
            >
              {profile.video.caption}
            </div>
          </section>
        )}
        <div className="md:grid md:grid-cols-3 md:gap-4">
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
          <div
            className={clsx([CLASSES.textBox, "artist description"])}
            style={{ height: "fit-content" }}
          >
            <header>
              <div className="uppercase mb-1 block">{profile.title}</div>
              {profile.metatag}
            </header>
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(profile?.description),
              }}
            />
            {profile.website && (
              <a
                href={profile.website}
                target="_blank"
                rel="noreferrer"
                className={clsx("px-2 text-base", CLASSES.highLightBG)}
              >
                website
              </a>
            )}
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
        title
        metatag
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
    images: allCloudinaryMedia(
      filter: { public_id: { regex: "artworks(?s)(.*)/teaser/" } }
    ) {
      edges {
        node {
          secure_url
          public_id
        }
      }
    }
  }
`;

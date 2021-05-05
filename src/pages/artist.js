import React, { useEffect, useState } from "react";
import { Link } from "gatsby-plugin-react-i18next";

import Layout from "../components/layout";
import { graphql } from "gatsby";
import * as queryString from "query-string";
import Video from "../components/video";
import BackgroundImage from "../components/background/bgArtist";
import NameVector from "../components/nameVector";
import PreviewModal from "../components/PreviewModal";
import CaptionImage from "../components/CaptionImage";
import * as styles from "../styles/artist.css"; //eslint-disable-line no-unused-vars
import { Remarkable } from "remarkable";
import clsx from "clsx";

const CLASSES = {
  imageGrid:
    "col-span-2 grid grid-flow-row gap-3 md:gap-10 md:grid-cols-6 artworks",
  image: "filter grayscale hover:filter-none",
  textBox:
    "rounded-lg p-2 mb-10 md:px-8 md:ml-3 mt-8 shadow-whiteTint shadow-md bg-white-tint",
  highLightBG: "bg-button hover:bg-button-hover rounded-sm",
  link:
    "md:even:ml-10 md:even:block mb-2 mx-auto text-white mr-4 px-4 uppercase whitespace-nowrap",
};

const ArtistPage = ({ location, data }) => {
  const { id } = queryString.parse(location.search);
  const [profile, setProfile] = useState();
  const [preview, setPreview] = useState();
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
    <Layout canGoBack>
      <BackgroundImage />
      <main className="m-7 pt-16 md:ml-32 md:pt-24">
        <div className="md:flex md:items-center justify-center md:justify-start mb-12 md:mb-0">
          <NameVector
            identifier={id}
            className="block md:h-24 md:inline mx-auto md:m-0 mb-2"
          />
          <div className="text-center md:text-left">
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
          <section className="md:mr-24 mb-5 text-center">
            <Video
              videoSrcURL={profile.video.url}
              className="mx-auto"
              id="video"
            />

            <div
              className="text-white text-sm bg-button mx-auto"
              style={{ width: "fit-content" }}
            >
              {profile.video.caption}
            </div>
          </section>
        )}
        <div className="md:grid md:grid-cols-3 md:gap-4">
          <div className={CLASSES.imageGrid}>
            {clImages.map((image, index) => (
              <button
                onClick={() => setPreview(image)}
                className={clsx(
                  index % 3 === 0 && index > 0 && "md:col-end-6",
                  index % 2 === 0 && index > 0 && "md:col-span-4",
                  index === 0 ? "md:col-span-6" : "md:col-span-2",
                  "focus:outline-none"
                )}
                key={image.node.public_id}
              >
                <CaptionImage
                  image={image}
                  captions={profile.captions}
                  key={image.node.public_id}
                />
              </button>
            ))}
          </div>
          <div
            className={clsx([
              CLASSES.textBox,
              "artist description",
              profile.video && "with-video",
            ])}
            style={{ height: "fit-content" }}
          >
            <header>
              <div className="uppercase mb-1 block text-xl">
                {profile.title}
              </div>
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
        {preview && (
          <PreviewModal
            image={preview}
            captions={profile.captions}
            onClose={() => {
              console.log(" close close ");
              setPreview(undefined);
            }}
          />
        )}
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

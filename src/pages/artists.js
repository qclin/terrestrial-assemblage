import React, { useState } from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import PondMarkers from "../components/pondMarkers";
import Layout from "../components/layout";
import { ARTISTS } from "../constants/constants";

import BackgroundImage from "../components/background/bgArtists";

const CLASSES = {
  link: "block px-5 rounded-md",
  linkOverlay:
    "mix-blend-color w-full h-20 absolute filter blur-lg hover:bg-algea-light left-0",
  linkText: "text-white text-7xl no-underline text-center",
};

function ArtistsPage() {
  const [active, setActive] = useState();
  return (
    <Layout>
      <BackgroundImage />
      <div className="fixed inset-0">
        <section className="grid h-full overflow-y-scroll">
          <PondMarkers active={active} />
          <nav
            style={{
              gridArea: "1/1",
            }}
            className="m-24 text-left"
          >
            {ARTISTS.map((artist) => (
              <div
                className="relative my-2"
                key={artist}
                style={{ width: "fit-content" }}
              >
                <Link
                  key={artist}
                  to={`/artist?id=${artist.identifier}`}
                  state={{ artist }}
                  className={CLASSES.link}
                  onMouseOver={() => setActive(artist.identifier)}
                >
                  <div
                    className={CLASSES.linkOverlay}
                    style={{
                      mixBlendMode: "color",
                      borderRadius: "0.375rem",
                      filter: "blur(16px)",
                    }}
                  ></div>
                </Link>
                <artist.svg className="w-auto h-24" />
              </div>
            ))}
          </nav>
        </section>
      </div>
    </Layout>
  );
}

export default ArtistsPage;

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
  }
`;

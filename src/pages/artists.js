import * as React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { ARTISTS } from "../constants/routes";

const CLASSES = {
  link: "block px-5 rounded-md",
  linkOverlay:
    "mix-blend-color w-full h-20 absolute filter blur-lg hover:bg-lightAlgea",
  linkText: "text-white text-7xl no-underline text-center",
};

function ArtistsPage({ location }) {
  return (
    <div className="fixed inset-0 ">
      <section className="grid h-full overflow-y-scroll">
        <StaticImage
          style={{ gridArea: "1/1" }}
          layout="fullWidth"
          src={"../assets/images/background/3-BUBBLES.jpg"}
        />
        <nav
          style={{
            gridArea: "1/1",
          }}
          className="grid m-24"
        >
          {ARTISTS.map((artist) => (
            <div className="relative my-2" key={artist.identifier}>
              <Link
                key={artist.identifier}
                to={`/artist?id=${artist.identifier}`}
                state={{ artist }}
                className={CLASSES.link}
              >
                <div className={CLASSES.linkOverlay}></div>
              </Link>
              <span className={CLASSES.linkText}>{artist.name}</span>
            </div>
          ))}
        </nav>
      </section>
    </div>
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

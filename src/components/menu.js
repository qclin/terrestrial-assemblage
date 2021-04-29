import * as React from "react";
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import clsx from "clsx";

import AboutSVG from "../assets/svgs/headers/en/menu/about.svg";
import ArtistsSVG from "../assets/svgs/headers/en/menu/artists.svg";
import ExhibitionSVG from "../assets/svgs/headers/en/menu/exhibition.svg";
import LivestreamSVG from "../assets/svgs/headers/en/menu/livestream.svg";
import ProgramSVG from "../assets/svgs/headers/en/menu/program.svg";
import VisitSVG from "../assets/svgs/headers/en/menu/visit.svg";

import DEAboutSVG from "../assets/svgs/headers/de/menu/about.svg";
import DEArtistsSVG from "../assets/svgs/headers/de/menu/artists.svg";
import DEExhibitionSVG from "../assets/svgs/headers/de/menu/exhibition.svg";
import DElivestreamSVG from "../assets/svgs/headers/de/menu/livestream.svg";
import DEProgramSVG from "../assets/svgs/headers/de/menu/program.svg";
import DEVisitSVG from "../assets/svgs/headers/de/menu/visit.svg";

const CLASSES = {
  menuBtn:
    "bg-algea-dark m-5 px-2 pb-0 pt-1 focus:outline-none z-10 absolute text-white uppercase",
  link: "block px-5 rounded-md ",
  linkOverlay:
    "mix-blend-color w-full h-32 absolute filter blur-lg hover:bg-algea-light left-0",
  linkText: "text-white text-9xl no-underline text-center",
};

function Menu() {
  const { language } = useI18next();

  const PAGES = [
    { path: "about", en: AboutSVG, de: DEAboutSVG },
    { path: "artists", en: ArtistsSVG, de: DEArtistsSVG },
    { path: "exhibition", en: ExhibitionSVG, de: DEExhibitionSVG },
    { path: "livestream", en: LivestreamSVG, de: DElivestreamSVG },
    { path: "program", en: ProgramSVG, de: DEProgramSVG },
    { path: "visit", en: VisitSVG, de: DEVisitSVG },
  ];
  const [visible, setVisible] = React.useState(false);

  return (
    <div className={clsx(visible && "inset-0 h-full", "fixed top-0 z-20")}>
      <button className={CLASSES.menuBtn} onClick={() => setVisible(!visible)}>
        {visible ? "X" : <Trans>menu</Trans>}
      </button>
      {visible && (
        <section className="grid ">
          <StaticImage
            style={{ gridArea: "1/1" }}
            layout="fullWidth"
            src={"../assets/images/background/3-BUBBLES.jpg"}
            alt="pond"
          />
          <nav
            style={{
              gridArea: "1/1",
              height: "100vh",
            }}
            className="grid relative place-items-center"
          >
            {PAGES.map((page) => {
              const Title = page[language];
              return (
                <div className="relative " key={page.path}>
                  <Link
                    key={page}
                    to={`/${page.path}`}
                    onClick={() => setVisible(false)}
                    className={CLASSES.link}
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
                  <Title className="h-12 md:h-32" />
                </div>
              );
            })}
          </nav>
        </section>
      )}
    </div>
  );
}

export default Menu;

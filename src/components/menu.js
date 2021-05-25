import * as React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import clsx from "clsx";

import AboutSVG from "../assets/svgs/headers/en/menu/about.svg";
import ArtistsSVG from "../assets/svgs/headers/en/menu/artists.svg";
import ExhibitionSVG from "../assets/svgs/headers/en/menu/exhibition.svg";
import ProgramSVG from "../assets/svgs/headers/en/menu/program.svg";
import VisitSVG from "../assets/svgs/headers/en/menu/visit.svg";

import DEAboutSVG from "../assets/svgs/headers/de/menu/about.svg";
import DEArtistsSVG from "../assets/svgs/headers/de/menu/artists.svg";
import DEExhibitionSVG from "../assets/svgs/headers/de/menu/exhibition.svg";
import DEProgramSVG from "../assets/svgs/headers/de/menu/program.svg";
import DEVisitSVG from "../assets/svgs/headers/de/menu/visit.svg";
import { BOOKING_URL } from "../constants/constants";
import TerrestrialTextSvg from "../assets/svgs/headers/terrestrial.svg";
import TATextSvg from "../assets/svgs/headers/TA.svg";

const CLASSES = {
  menuBtn:
    "bg-button hover:bg-button-hover rounded-sm px-2 pb-0 pt-1 focus:outline-none text-white uppercase",
  link: "block rounded-md ",
  linkOverlay: "w-full absolute filter blur-lg hover:bg-button left-0",
  linkHeight: "h-16 md:h-32",
};

const PAGES = [
  { path: "about", en: AboutSVG, de: DEAboutSVG },
  { path: BOOKING_URL, en: VisitSVG, de: DEVisitSVG, external: true },
  { path: "artists", en: ArtistsSVG, de: DEArtistsSVG },
  { path: "program", en: ProgramSVG, de: DEProgramSVG },
  { path: "exhibition", en: ExhibitionSVG, de: DEExhibitionSVG },
];

function Menu() {
  const { language } = useI18next();

  const [visible, setVisible] = React.useState(false);

  const overlay = () => (
    <div
      className={clsx([CLASSES.linkOverlay, CLASSES.linkHeight])}
      style={{
        mixBlendMode: "color",
        borderRadius: "6px",
        filter: "blur(16px)",
      }}
    ></div>
  );
  return (
    <div className={clsx(visible && "inset-0 h-full", "fixed top-0 z-20")}>
      <div className="flex m-5 absolute z-10">
        <button
          className={clsx([CLASSES.menuBtn, "menu mr-2"])}
          onClick={() => setVisible(!visible)}
        >
          {visible ? "X" : "menu"}
        </button>
        <Link
          to="/"
          className="px-2 pb-0 pt-1 md:opacity-40 md:hover:opacity-100"
        >
          <TerrestrialTextSvg className="h-5 hidden md:block" />
          <TATextSvg className="h-5 md:hidden" />
        </Link>
      </div>
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
            className="grid relative place-items-center md:h-screen py-14"
          >
            {PAGES.map((page) => {
              const Title = page[language];

              return (
                <div className="relative " key={page.path}>
                  {page.external ? (
                    <a href={page.path} target="_blank" rel="noreferrer">
                      {overlay()}
                    </a>
                  ) : (
                    <Link
                      key={page}
                      to={`/${page.path}`}
                      onClick={() => setVisible(false)}
                      className={CLASSES.link}
                      style={{ width: "fit-content" }}
                    >
                      {overlay()}
                    </Link>
                  )}
                  <Title className={CLASSES.linkHeight} />
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

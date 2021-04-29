import * as React from "react";
import { useI18next, Trans, Link } from "gatsby-plugin-react-i18next";
import DEPressRelease from "../assets/pdfs/Terrestrial Assemblage_Pressemitteilung.pdf";
import ENPRessRelease from "../assets/pdfs/Terrestrial Assemblage_pressrelease.pdf";
import { BOOKING_URL } from "../constants/constants";

const CLASSES = {
  link: "text-lg uppercase hover:text-algea bg-white-half mr-4 px-1 py-0",
};
const Footer = () => {
  const { language } = useI18next();
  const isGerman = language === "de";

  return (
    <section className="fixed bottom-0 w-full">
      <div
        className="backdrop-filter backdrop-blur-sm h-16 w-full absolute bottom-0"
        style={{ zIndex: -1 }}
      ></div>
      <div className="flex flex-row mx-10 mb-5 z-10">
        <a
          href={isGerman ? DEPressRelease : ENPRessRelease}
          download
          className={CLASSES.link}
        >
          <Trans>Press PDF</Trans>
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          className={CLASSES.link}
          rel="noreferrer"
        >
          <Trans>Book Visit</Trans>
        </a>
        <Link to={`/imprint`} className={CLASSES.link}>
          <Trans>Imprint</Trans>
        </Link>
      </div>
    </section>
  );
};

export default Footer;

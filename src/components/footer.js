import * as React from "react";
import { useI18next, Trans, Link } from "gatsby-plugin-react-i18next";
import DEPressRelease from "../assets/pdfs/Terrestrial Assemblage_Pressemitteilung.pdf";
import ENPRessRelease from "../assets/pdfs/Terrestrial Assemblage_pressrelease.pdf";
import { BOOKING_URL } from "../constants/constants";

const CLASSES = {
  link:
    "text-lg uppercase mr-4 px-1 py-0 text-white bg-button hover:bg-button-hover",
};
const Footer = () => {
  const { language } = useI18next();
  const isGerman = language === "de";

  return (
    <footer className="mx-10 mb-5">
      <div className="flex flex-row">
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
      <p className="text-white max-w-md">
        <Trans>Covid Guidelines</Trans>
      </p>
    </footer>
  );
};

export default Footer;

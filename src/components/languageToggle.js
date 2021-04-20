import { Link, useI18next, Trans } from "gatsby-plugin-react-i18next";
import React from "react";
import clsx from "clsx";
import DEPressRelease from "../assets/pdfs/Terrestrial Assemblage_Pressemitteilung.pdf";
import ENPRessRelease from "../assets/pdfs/Terrestrial Assemblage_pressrelease.pdf";

const LanguageToggle = () => {
  const { languages, originalPath, language } = useI18next();
  const isGerman = language === "de";
  return (
    <header className="main-header">
      <ul className="flex flex-row mt-5">
        {languages.map((lng) => (
          <li
            key={lng}
            className={clsx(
              language === lng && "underline bold",
              "text-lg text-white uppercase pr-2 bold"
            )}
          >
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
      <a
        href={isGerman ? DEPressRelease : ENPRessRelease}
        download
        className="text-lg text-white uppercase hover:text-algea"
      >
        <Trans>Press</Trans>
      </a>
    </header>
  );
};

export default LanguageToggle;

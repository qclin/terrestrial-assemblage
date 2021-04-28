import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import clsx from "clsx";

const LanguageToggle = () => {
  const { languages, originalPath, language } = useI18next();
  const [search, setSearch] = useState();

  const redirectWithQuery = ({ location }) => {
    setSearch(location.search);
  };

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
            <Link
              to={originalPath + search}
              language={lng}
              getProps={redirectWithQuery}
            >
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default LanguageToggle;

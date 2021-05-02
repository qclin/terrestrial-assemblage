import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import clsx from "clsx";

const LanguageToggle = () => {
  const { languages, originalPath, language } = useI18next();
  const [search, setSearch] = useState("");

  const redirectWithQuery = ({ location }) => {
    location.search && setSearch(location.search);
  };

  return (
    <ul className="fixed mx-5 md:mx-10 top-0 right-0 z-20 flex flex-row mt-5 menu">
      {languages.map((lng) => (
        <li
          key={lng}
          className={clsx(
            language === lng && "bg-button",
            "text-lg text-white uppercase px-2 mr-2 bold hover:bg-button-hover"
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
  );
};

export default LanguageToggle;

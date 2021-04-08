import * as React from "react";
import { Link, useTranslation, Trans } from "gatsby-plugin-react-i18next";
import LanguageToggle from "./languageToggle";

function Menu() {
  const { t } = useTranslation();

  const pages = [
    { path: "about", label: t("about") },
    { path: "artists", label: t("artists") },
    { path: "livestream", label: t("livestream") },
    { path: "program", label: t("program") },
    { path: "symposium", label: t("symposium") },
    { path: "announcement", label: t("announcement") },
    { path: "social", label: t("social") },
  ];

  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <div className="flex flex-row">
        <button
          className="bg-white m-5 px-2 py-1 rounded-full z-10 shadow-md shadow-white focus:outline-none"
          onClick={() => setVisible(!visible)}
        >
          {visible ? "X" : <Trans>menu</Trans>}
        </button>
        <LanguageToggle />
      </div>
      {visible && (
        <section className="fixed inset-0 overflow-y-scroll bg-blue">
          <nav>
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page.path}`}
                onClick={() => setVisible(false)}
                className="text-white text-9xl no-underline text-center block"
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </section>
      )}
    </>
  );
}

export default Menu;

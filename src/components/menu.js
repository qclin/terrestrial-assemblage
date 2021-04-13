import * as React from "react";
import { Link, useTranslation, Trans } from "gatsby-plugin-react-i18next";
import LanguageToggle from "./languageToggle";
import { StaticImage } from "gatsby-plugin-image";

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
    <div className="fixed inset-0">
      <div className="flex flex-row">
        <button
          className="bg-white m-5 px-2 py-1 rounded-full shadow-md shadow-white focus:outline-none"
          onClick={() => setVisible(!visible)}
        >
          {visible ? "X" : <Trans>menu</Trans>}
        </button>
        <LanguageToggle />
      </div>
      {visible && (
        <section className="grid ">
          <StaticImage
            style={{ gridArea: "1/1" }}
            layout="fullWidth"
            src={"../assets/images/background/3-BUBBLES.jpg"}
          />
          <nav
            style={{
              gridArea: "1/1",
            }}
            className="grid relative place-items-center"
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page.path}`}
                onClick={() => setVisible(false)}
                className="block rounded-full px-5 hover:shadow-md hover:shadow-algea hover:bg-algea backdrop-opacity-50 mix-blend-difference"
              >
                <span className="text-white text-9xl no-underline text-center">
                  {page.label}
                </span>
              </Link>
            ))}
          </nav>
        </section>
      )}
    </div>
  );
}

export default Menu;

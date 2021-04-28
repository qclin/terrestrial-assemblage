import * as React from "react";
import { Link, useTranslation, Trans } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import clsx from "clsx";

const CLASSES = {
  menuBtn:
    "bg-algea-dark m-5 px-2 pb-0 pt-1 focus:outline-none z-10 absolute text-white uppercase",
  link: "block px-5 rounded-md",
  linkOverlay:
    "mix-blend-color w-full h-32 absolute filter blur-lg hover:bg-algea-light",
  linkText: "text-white text-9xl no-underline text-center",
};

function Menu() {
  const { t } = useTranslation();

  const PAGES = [
    { path: "about", label: t("about") },
    { path: "artists", label: t("artists") },
    { path: "livestream", label: t("livestream") },
    { path: "program", label: t("symposium program") },
    { path: "imprint", label: t("imprint") },
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
            {PAGES.map((page) => [
              <div className="relative" key={page.path}>
                <Link
                  key={page}
                  to={`/${page.path}`}
                  onClick={() => setVisible(false)}
                  className={CLASSES.link}
                >
                  <div
                    className={CLASSES.linkOverlay}
                    style={{ mixBlendMode: "color" }}
                  ></div>
                </Link>
                <span className={CLASSES.linkText}>{page.label}</span>
              </div>,
            ])}
          </nav>
        </section>
      )}
    </div>
  );
}

export default Menu;

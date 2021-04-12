import * as React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import SenatKulturLogo from "../assets/svgs/partners/kultur_senat.svg";
import KoreanCenterLogo from "../assets/svgs/partners/korean_center.svg";
import GreenBeltLogo from "../assets/svgs/partners/gruenes_band_europa.svg";

function Partners() {
  const { t } = useTranslation();

  return (
    <footer className="my-10">
      <span className="text-xl ml-10 uppercase bg-white bg-opacity-30">
        <Trans>Supported by </Trans>
      </span>
      <div className="grid md:grid-cols-4 lg:grid-cols-6 md:gap-4 gap-y-10">
        <SenatKulturLogo
          className="lg:w-2/4 md:w-3/4 md:col-start-2 mx-auto"
          alt={t("Berlin Senate Department for Culture and Europe")}
        />
        <KoreanCenterLogo
          className="lg:w-2/4 md:w-3/4 md:mt-5 mx-auto"
          alt={t("Korean Cultural Centre Berlin")}
        />
        <GreenBeltLogo
          className="lg:w-2/4 md:w-3/4 mx-auto"
          alt={t("Green Belt Europe")}
        />
      </div>
    </footer>
  );
}

export default Partners;

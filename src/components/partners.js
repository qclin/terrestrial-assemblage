import * as React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import SenatKulturLogo from "../assets/svgs/partners/kultur_senat.svg";
import KoreanCenterLogo from "../assets/svgs/partners/korean_center.svg";
import GreenBeltLogo from "../assets/svgs/partners/gruenes_band_europa.svg";

function Partners() {
  const { t } = useTranslation();

  return (
    <footer className="my-10">
      <span className="text-xl ml-10 uppercase bg-white bg-opacity-30 ">
        <Trans>Supported by </Trans>
      </span>
      <div className="grid grid-cols-6 gap-4">
        <div></div>
        <SenatKulturLogo
          className="w-3/4"
          alt={t("Berlin Senate Department for Culture and Europe")}
        />
        <KoreanCenterLogo
          className="w-3/4 mt-5"
          alt={t("Korean Cultural Centre Berlin")}
        />
        <GreenBeltLogo className="w-3/4 mb-5" alt={t("Green Belt Europe")} />

        <div></div>
      </div>
    </footer>
  );
}

export default Partners;

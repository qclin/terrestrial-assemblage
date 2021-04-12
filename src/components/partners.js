import * as React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import SenatKulturLogo from "../assets/svgs/partners/kultur_senat.svg";
import KoreanCenterLogo from "../assets/svgs/partners/korean_center.svg";
import GreenBeltLogo from "../assets/svgs/partners/gruenes_band_europa.svg";

function Partners() {
  const { t } = useTranslation();

  return (
    <footer className="my-10">
      <span className="text-xl ml-10 uppercase bg-white bg-opacity-60 pt-2">
        <Trans>Supported by </Trans>
      </span>
      <div className="grid grid-cols-3 md:grid-cols-10 md:gap-4 gap-y-10 ml-10">
        <SenatKulturLogo
          className="mx-auto w-3/4"
          alt={t("Berlin Senate Department for Culture and Europe")}
        />
        <KoreanCenterLogo
          className="md:mt-5 mx-auto w-3/4"
          alt={t("Korean Cultural Centre Berlin")}
        />
        <GreenBeltLogo className="mx-auto w-3/4" alt={t("Green Belt Europe")} />
      </div>
    </footer>
  );
}

export default Partners;

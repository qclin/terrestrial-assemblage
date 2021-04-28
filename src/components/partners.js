import * as React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";

function Partners() {
  const { t } = useTranslation();

  return (
    <section className="m-10">
      <div className="flex mt-5 justify-end">
        <StaticImage
          height={50}
          className="mr-3"
          alt={t("Berlin Senate Department for Culture and Europe")}
          src={"../assets/images/partners/Sen_KuEu.png"}
        />
        <StaticImage
          height={50}
          className="mr-3"
          alt={t("Korean Cultural Centre Berlin")}
          src={"../assets/images/partners/KoreanCenter.png"}
        />
        <StaticImage
          height={50}
          className="mr-3"
          alt={t("Green Belt Europe")}
          src={"../assets/images/partners/GBEurope.png"}
        />
        <StaticImage
          height={50}
          className="mr-3"
          alt={t("Hanns Seidel Stiftung")}
          src={"../assets/images/partners/HSS_1.png"}
        />
        <StaticImage
          height={50}
          className="mr-3"
          alt={t("BUND")}
          src={"../assets/images/partners/BUND.png"}
        />
        <StaticImage
          height={50}
          className="mr-3"
          alt={t("Floating University")}
          src={"../assets/images/partners/floatingev.png"}
        />
      </div>
    </section>
  );
}

export default Partners;

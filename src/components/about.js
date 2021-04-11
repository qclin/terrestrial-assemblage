import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import clsx from "clsx";

const textStyles = {
  details: "text-4xl opacity-70",
  names: "uppercase bg-white bg-opacity-30 px-2",
  sectionHeader: "text-xl uppercase bg-white bg-opacity-30 px-1",
};

const localStyles = {
  fitContent: { width: "fit-content" },
};

const participantName = (name) => (
  <span className={textStyles.names}>{name}</span>
);

const ARTISTS = [
  "Ana Alenso and Philipp Modersohn",
  "Marco Barotti",
  "Ines Doujak",
  "Anne Duk Hee Jordan",
  "Han Seok Hyun",
  "Folke Köbberling",
  "Mischa Leinkauf",
  "Shira Wachsmann",
  "Clemens Wilhelm",
];
const AboutSection = () => {
  return (
    <section>
      <title>
        <Trans>About</Trans>
      </title>
      <div className="text-white">
        <h1 className="text-9xl">07.05 - 06.06.2021</h1>
        <h4 className="text-6xl">
          <Trans>16.00-22.00 / Opening 06.May</Trans>
        </h4>
        <p className={textStyles.details}>
          <Trans>Outdoor exhibition and Symposium</Trans>
        </p>
        <p className={textStyles.details}>
          <Trans>Floating University, Berlin</Trans>
        </p>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div class="col-start-2">
          <div class="grid grid-cols-6">
            <div class="col-span-4">
              <span className={textStyles.sectionHeader}>
                <Trans>Curated By</Trans>
              </span>
            </div>
            <div class="col-end-6  col-span-3">
              {participantName("Pauline Doutreluingne")}
            </div>
            <div class="col-start-2 col-span-4">
              <Trans>and</Trans> {participantName("Keumhwa Kim")}
            </div>
          </div>
        </div>
        <div class="col-start-3">
          <div class="grid grid-cols-3">
            <div class="col-span-4">
              <p
                className={textStyles.sectionHeader}
                style={localStyles.fitContent}
              >
                <Trans>Featuring</Trans>
              </p>
            </div>

            {ARTISTS.map((artist, index) => (
              <div class={clsx(`col-start-${index}`)}>
                {participantName(artist)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <p className="bg-white col-span-2 m-10 px-5 py-10 rounded-xl shadow-md shadow-white">
          <h1 className="text-8xl">
            <Trans>About</Trans>
          </h1>
          <Trans>curatoritorial statement</Trans>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

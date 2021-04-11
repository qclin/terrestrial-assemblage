import * as React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import OpeningHoursText from "../assets/svgs/headers/en/opening-hours.svg";
import AboutText from "../assets/svgs/headers/en/about.svg";
import ExhibitionText from "../assets/svgs/headers/en/exhibition.svg";
import DEOpeningHoursText from "../assets/svgs/headers/de/opening-hours.svg";
import DEAboutText from "../assets/svgs/headers/de/about.svg";
import DEExhibitionText from "../assets/svgs/headers/de/exhibition.svg";

const textStyles = {
  details: "text-4xl opacity-70",
  names: "uppercase bg-white bg-opacity-50 px-2",
  sectionHeader: "text-xl uppercase bg-white bg-opacity-50 px-1",
};

const localStyles = {
  fitContent: { width: "fit-content" },
};

const participantName = (name) => (
  <span className={textStyles.names}>{name}</span>
);

const ARTISTS = [
  "Ana Alenso",
  "Marco Barotti",
  "Ines Doujak",
  "Anne Duk Hee Jordan",
  "Han Seok Hyun",
  "Folke Köbberling",
  "Mischa Leinkauf",
  "Santiago Sierra",
  "Shira Wachsmann",
  "Clemens Wilhelm",
];
const AboutSection = () => {
  const { language } = useI18next();
  const isGerman = language === "de";

  return (
    <section>
      <title>
        <Trans>About</Trans>
      </title>
      {isGerman ? (
        <DEOpeningHoursText
          className="text-white m-10"
          style={{ marginTop: "75vh" }}
        />
      ) : (
        <OpeningHoursText
          className="text-white m-10"
          style={{ marginTop: "75vh" }}
        />
      )}

      <div className="grid lg:grid-cols-3 gap-4">
        <div></div>
        <div>
          <div className="grid lg:grid-cols-6">
            <div className="col-span-4">
              <span className={textStyles.sectionHeader}>
                <Trans>Curated By</Trans>
              </span>
            </div>
            <div className="col-end-6  col-span-3">
              {participantName("Pauline Doutreluingne")}
            </div>
            <div className="col-start-2 col-span-4">
              <Trans>and</Trans>
              {participantName("Keumhwa Kim")}
            </div>
          </div>
        </div>
        <div className="mt-20">
          <p
            className={textStyles.sectionHeader}
            style={localStyles.fitContent}
          >
            <Trans>Artists</Trans>
          </p>

          {ARTISTS.map((artist, index) => (
            <div
              className="mx-20 w-2/4 odd:text-left even:text-right odd:pl-10"
              key={`artist-${index}`}
            >
              {participantName(artist)}
            </div>
          ))}
        </div>
        <div className="col-span-2">
          <div className="bg-white m-10 px-5 py-10 rounded-xl shadow-md shadow-white">
            {isGerman ? (
              <DEAboutText className="h-36 mb-5" />
            ) : (
              <AboutText className="h-36 mb-5" />
            )}

            <p className="mb-5">
              <Trans>curatoritorial statement 1</Trans>
            </p>
            <p className="mb-5">
              <Trans>curatoritorial statement 2</Trans>
            </p>
            <p className="mb-5">
              <Trans>curatoritorial statement 3</Trans>
            </p>
            <p className="mb-5">
              <Trans>curatoritorial statement 4</Trans>
            </p>
            <p className="mb-5">
              <Trans>curatoritorial statement 5</Trans>
            </p>

            {isGerman ? (
              <DEExhibitionText className="h-24 mb-5 mt-8" />
            ) : (
              <ExhibitionText className="h-24 mb-5 mt-8" />
            )}
            <p className="mb-5">
              <Trans>exhibition content</Trans>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

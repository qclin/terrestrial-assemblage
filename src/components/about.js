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
          className="lg:m-10 sm:my-5"
          style={{ marginTop: "75vh" }}
        />
      ) : (
        <OpeningHoursText
          className="lg:m-10 sm:my-5"
          style={{ marginTop: "75vh" }}
        />
      )}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div className="lg:col-start-2">
          <div className="grid lg:grid-cols-6 ml-5">
            <div className="col-span-4 ">
              <span className={textStyles.sectionHeader}>
                <Trans>Curated By</Trans>
              </span>
            </div>
            <div className="lg:col-end-6  col-span-3">
              {participantName("Pauline Doutreluingne")}
            </div>
            <div className="lg:col-start-2 col-span-4">
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
          <div className="flex flex-wrap">
            {ARTISTS.map((artist, index) => (
              <div
                className={`lg:mx-20 lg:w-2/4 lg:odd:text-left lg:even:text-right lg:odd:pl-${
                  index * 3
                } sm:even:ml-5 sm:odd:mr-4 `}
                key={`artist-${index}`}
              >
                {participantName(artist)}
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="bg-white m-10 px-5 py-10 rounded-xl shadow-md shadow-white">
            {isGerman ? (
              <DEAboutText className="sm:max-w-full max-h-36 mb-5" />
            ) : (
              <AboutText className="sm:max-w-full max-h-36 mb-5" />
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
              <DEExhibitionText className="max-h-24 mb-5 mt-8 md:max-w-full" />
            ) : (
              <ExhibitionText className="max-h-24 mb-5 mt-8 md:max-w-full" />
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

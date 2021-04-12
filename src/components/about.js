import * as React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import OpeningHoursText from "../assets/svgs/headers/en/opening-hours.svg";
import AboutText from "../assets/svgs/headers/en/about.svg";
import ExhibitionText from "../assets/svgs/headers/en/exhibition.svg";
import DEOpeningHoursText from "../assets/svgs/headers/de/opening-hours.svg";
import DEAboutText from "../assets/svgs/headers/de/about.svg";
import DEExhibitionText from "../assets/svgs/headers/de/exhibition.svg";
import { ARTISTS, PARTICIPANTS } from "./constants";

const textStyles = {
  details: "text-4xl opacity-70",
  highlight:
    "text-xl uppercase bg-white bg-opacity-50 px-1 justify-center my-1 pt-2",
};

const renderName = (name) => (
  <span className={textStyles.highlight}>{name}</span>
);

const renderParagraphs = (text) => (
  <p
    className="mb-5"
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease"
  >
    {text}
  </p>
);
const AboutSection = () => {
  const { language } = useI18next();
  const isGerman = language === "de";

  return (
    <section>
      <title>
        <Trans>About</Trans>
      </title>

      <div
        className="md:grid md:grid-cols-10 gap-4"
        style={{ marginTop: "75vh" }}
      >
        {isGerman ? (
          <DEOpeningHoursText className="lg:mx-10 sm:mb-5 md:col-span-7" />
        ) : (
          <OpeningHoursText className="lg:mx-10 sm:mb-5 md:col-span-7" />
        )}
        <div className="col-span-3 grid space-between sm:grid-cols-2 md:grid-cols-1 m-10">
          <div className="md:mt-24">
            <span className={textStyles.highlight}>
              <Trans>Curators</Trans>:
            </span>

            <div className="text-right mr-10">
              {renderName("Pauline Doutreluingne")}
            </div>
            <div className="text-left ml-10 ">
              {renderName("& Keumhwa Kim")}
            </div>
          </div>

          <div className="self-end mt-10">
            <span className={textStyles.highlight}>
              <Trans>Artists</Trans>:
            </span>
            <div className="flex flex-wrap">
              {ARTISTS.map((artist, index) => (
                <div
                  className={`lg:mx-auto lg:w-3/4 lg:odd:text-left lg:even:text-right lg:odd:pl-${
                    index * 3 - 6
                  } sm:even:ml-5 sm:odd:mr-4 `}
                  key={`artist-${index}`}
                >
                  {renderName(artist)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="bg-white m-10 px-5 py-10 rounded-xl shadow-md shadow-white">
            {isGerman ? (
              <DEAboutText
                className="sm:max-w-full max-h-36 mb-5"
                style={{ width: "max-content" }}
              />
            ) : (
              <AboutText
                className="sm:max-w-full max-h-36 mb-5"
                style={{ width: "max-content" }}
              />
            )}
            {renderParagraphs(<Trans>curatoritorial statement 1</Trans>)}
            {renderParagraphs(<Trans>curatoritorial statement 2</Trans>)}
            {renderParagraphs(<Trans>curatoritorial statement 3</Trans>)}
            {renderParagraphs(<Trans>curatoritorial statement 4</Trans>)}
            {renderParagraphs(<Trans>curatoritorial statement 5</Trans>)}
          </div>
        </div>
        <div className="self-end md:col-span-4 m-10">
          <span className={textStyles.highlight}>
            <Trans>Symposium Particiants</Trans>:
          </span>
          <div className="flex flex-wrap">
            {PARTICIPANTS.map((participant, index) => (
              <div
                className={`lg:mx-auto lg:w-3/4 lg:odd:text-left lg:even:text-right lg:odd:pl-${
                  index * 3 - 6
                } sm:even:ml-5 sm:odd:mr-4 `}
                key={`participants-${index}`}
              >
                {renderName(participant)}
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="bg-white m-10 px-5 py-10 rounded-xl shadow-md shadow-white">
            {isGerman ? (
              <DEExhibitionText className="max-h-36 mb-5 max-w-full mr-auto" />
            ) : (
              <ExhibitionText className="max-h-36 mb-5 max-w-full mr-auto" />
            )}
            {renderParagraphs(<Trans>exhibition content</Trans>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

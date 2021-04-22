import * as React from "react";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import OpeningHoursText from "../assets/svgs/headers/en/opening-hours.svg";
import DEOpeningHoursText from "../assets/svgs/headers/de/opening-hours.svg";
import { ARTISTS, PARTICIPANTS } from "../constants/constants";
// import * as styles from "./about-css-modules.module.css";

const textStyles = {
  details: "text-4xl opacity-70",
  highlight:
    "text-xl uppercase bg-white bg-opacity-50 px-1 justify-center pt-2 leading-none",
};

const renderName = (name) => (
  <span className={textStyles.highlight}>{name}</span>
);

const Introduction = () => {
  const { language } = useI18next();
  const isGerman = language === "de";

  return (
    <section>
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

            <div className="text-right mr-10 my-1">
              {renderName("Pauline Doutreluingne")}
            </div>
            <div className="text-left ml-10 my-1">
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
                  className={`my-1 lg:mx-auto lg:w-3/4 lg:odd:text-left lg:even:text-right lg:odd:pl-${
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
        <div className="self-end md:col-span-4 m-10">
          <span className={textStyles.highlight}>
            <Trans>Symposium Participants</Trans>:
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
      </div>
    </section>
  );
};

export default Introduction;

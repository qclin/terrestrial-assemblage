import * as React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import OpeningHoursText from "../assets/svgs/headers/en/opening-hours.svg";
import DEOpeningHoursText from "../assets/svgs/headers/de/opening-hours.svg";

const Introduction = () => {
  const { language } = useI18next();
  const isGerman = language === "de";

  return (
    <section>
      <div className="md:grid md:grid-cols-10 gap-4" id="introduction">
        {isGerman ? (
          <DEOpeningHoursText className="mx-3 md:mx-10 sm:mb-5 md:col-span-7" />
        ) : (
          <OpeningHoursText className="mx-3 md:mx-10 sm:mb-5 md:col-span-7" />
        )}
      </div>
    </section>
  );
};

export default Introduction;

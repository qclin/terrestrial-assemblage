import React from "react";
import clsx from "clsx";
import { utcToZonedTime, format } from "date-fns-tz";
import enGB from "date-fns/locale/en-GB";
import { Link } from "gatsby-plugin-react-i18next";

const CLASSES = {
  text: "text-white backdrop-filter backdrop-blur-sm ml-10",
};
const TalkRow = ({ talk }) => {
  const datetimeFormat = Intl.DateTimeFormat().resolvedOptions();
  const localTime = utcToZonedTime(
    new Date(talk.time),
    datetimeFormat.timeZone
  );

  const localTimeString = format(localTime, "HH:mm zzz", {
    timeZone: datetimeFormat.timeZoneName,
    locale: enGB,
  });

  if (!talk.description) {
    return (
      <div className={"items-baseline mb-12"}>
        <span className="text-base w-36 text-white">{localTimeString}</span>
        <span className={CLASSES.text}> {talk.title} </span>
      </div>
    );
  }

  return (
    <div className="my-2">
      <div className={"items-baseline mb-12"}>
        <span className="text-base w-36 text-white inline">
          {localTimeString}
        </span>
        <Link
          to={`/talk?id=${talk.id}&time=${localTimeString}`}
          className={clsx([
            "flex-auto text-left focus:outline-none inline max-w-xl",
            CLASSES.text,
          ])}
        >
          <h3 className="text-6xl">{talk.speaker && `${talk.speaker}`}</h3>
          <div className="max-w-xl">
            {talk.organization}
            <br />
            <span className="hover:underline">⟶ {talk.title}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TalkRow;

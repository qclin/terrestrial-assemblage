import React from "react";
import clsx from "clsx";
import { utcToZonedTime, format } from "date-fns-tz";
import enGB from "date-fns/locale/en-GB";
import { Link } from "gatsby-plugin-react-i18next";
import NameVector from "./nameVector";
const CLASSES = {
  time: "text-base w-36 text-white md:col-start-1",
  text: "text-white backdrop-filter backdrop-blur-sm ml-10",
  textColumn: "md:col-span-2 lg:col-span-6",
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
    return [
      <span className={CLASSES.time}>{localTimeString}</span>,
      <span className={clsx([CLASSES.text, CLASSES.textColumn])}>
        {talk.title}
      </span>,
    ];
  }

  return [
    <span className={CLASSES.time}>{localTimeString}</span>,
    <Link
      to={`/talk?id=${talk.id}&time=${localTimeString}`}
      className={clsx([CLASSES.textColumn, CLASSES.text])}
    >
      {talk.name && (
        <NameVector identifier={talk.name} className="h-16 w-auto" />
      )}
      <div className="max-w-xl">
        {talk.organization}
        <br />
        <span className="hover:underline">⟶ {talk.title}</span>
      </div>
    </Link>,
  ];
};

export default TalkRow;

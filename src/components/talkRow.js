import React from "react";
import clsx from "clsx";
import { utcToZonedTime, format } from "date-fns-tz";
import enGB from "date-fns/locale/en-GB";
import { Link } from "gatsby-plugin-react-i18next";
import NameVector from "./nameVector";
import Video from "./video";


const CLASSES = {
  textGrid: "md:grid md:grid-cols-3 lg:grid-cols-10 gap-4 gap-y-9 my-8 md:my-24",
  time: "text-base w-36 text-white md:col-start-1 mt-10 md:mt-0",
  text: "text-white backdrop-filter backdrop-blur-sm",
  textColumn: "md:col-span-2 lg:col-span-6",
  linkOverlay: "w-full h-full absolute filter blur-lg hover:bg-button left-0",
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

  if (!talk.video) {
    return (
    <div className={CLASSES.textGrid} >
      <div className={CLASSES.time}>{localTimeString}</div>
      <div className={clsx([CLASSES.text, CLASSES.textColumn])}>
        {talk.id && (
          <NameVector
            identifier={talk.id}
            className="h-14 md:h-24 w-auto max-w-full"
          />
        )}
        <div>{talk.title}</div>
      </div>
      </div>
    );
  }

  return <div className={CLASSES.textGrid}>
    <div className={CLASSES.time}>{localTimeString}</div>
    <Link
      to={`/talk?id=${talk.id}&time=${localTimeString}`}
      className={clsx([CLASSES.textColumn, CLASSES.text, "max-w-xl"])}
    >
      {talk.speaker && (
        <NameVector
          identifier={talk.speaker.name}
          className="h-14 md:h-24 w-auto max-w-full"
        />
      )}
      <div className="relative" style={{ height: "fit-content" }}>
        <div
          className={CLASSES.linkOverlay}
          style={{
            mixBlendMode: "color",
            borderRadius: "6px",
            filter: "blur(16px)",
          }}
        ></div>
        {talk.organization}
        <div className="hover:underline">⟶ {talk.title}</div>
      </div>
    </Link>
    </div>
  ;
};

export default TalkRow;

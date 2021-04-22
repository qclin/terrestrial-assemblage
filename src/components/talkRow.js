import React, { useState } from "react";
import clsx from "clsx";
import { utcToZonedTime, format } from "date-fns-tz";
import enGB from "date-fns/locale/en-GB";
import { Remarkable } from "remarkable";

const TalkRow = ({ talk }) => {
  const datetimeFormat = Intl.DateTimeFormat().resolvedOptions();
  const [visible, setVisible] = useState(false);

  const localTime = utcToZonedTime(
    new Date(talk.time),
    datetimeFormat.timeZone
  );

  const localTimeString = format(localTime, "HH:mm zzz", {
    timeZone: datetimeFormat.timeZoneName,
    locale: enGB,
  });

  var md = new Remarkable();

  if (!talk.description) {
    return (
      <div className="flex flex-row items-baseline mb-12">
        <h3 className="text-left inline flex-1">
          {talk.speaker && `${talk.speaker}: `}
          {talk.title}
        </h3>
        <span className="text-base w-36">
          {localTimeString} {"     "}
        </span>
      </div>
    );
  }

  return (
    <div className="my-2">
      <div className="flex flex-row items-baseline">
        <span className="text-base w-36">
          {localTimeString} {"     "}
        </span>
        <button
          onClick={() => setVisible(!visible)}
          className="text-left focus:outline-none inline max-w-5xl"
        >
          <h3 className="text-left inline">
            {talk.speaker && `${talk.speaker}: `}
            <i>{talk.title}</i>
          </h3>
        </button>
      </div>
      <div className="md:grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <p className={clsx(visible ? "block" : "hidden", "p-10 bg-red")}>
            <div
              dangerouslySetInnerHTML={{ __html: md.render(talk.description) }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TalkRow;

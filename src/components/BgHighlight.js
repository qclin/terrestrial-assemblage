import clsx from "clsx";
import * as React from "react";

function BgHighlight({ className, children }) {
  return (
    <div
      className={clsx(["relative", className])}
      style={{ width: "fit-content" }}
    >
      <div
        className="mix-blend-color h-full w-full absolute bg-algea-tint"
        style={{ mixBlendMode: "color", zIndex: -10 }}
      ></div>
      {children}
    </div>
  );
}

export default BgHighlight;

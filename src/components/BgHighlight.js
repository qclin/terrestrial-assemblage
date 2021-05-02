import clsx from "clsx";
import * as React from "react";

function BgHighlight({ className, children }) {
  return (
    <div
      className={clsx(["relative", className])}
      style={{ width: "fit-content" }}
    >
      <div
        className="mix-blend-color h-full w-full absolute bg-button hover:bg-button-hover"
        style={{ mixBlendMode: "color", zIndex: -1 }}
      ></div>
      {children}
    </div>
  );
}

export default BgHighlight;

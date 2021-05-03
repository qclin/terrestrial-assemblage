import React from "react";

const overLayStyle = {
  mixBlendMode: "multiply",
  width: "100vw",
  height: "100vw",
  backgroundImage: "radial-gradient(circle, #fff, #e3e6c0,  #fff, #fff)",
  transition: "3s",
  transitionTimingFunction: "ease-in-out",
  pointerEvents: "none",
  willChange: "opacity",
};

function MouseOverlay({ mousePosition }) {
  return (
    <div
      className="fixed blur-3xl"
      style={{
        ...overLayStyle,
        top: `calc(${mousePosition.top}px - 50vw)`,
        left: `calc(${mousePosition.left}px - 50vw)`,
      }}
    ></div>
  );
}

export default MouseOverlay;

import React, { useState } from "react";
import MouseOverlay from "./mouseOverlay";
import Partners from "./partners";
import "./layout.css";
import LanguageToggle from "./languageToggle";

export default function Layout({ children }) {
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });
  const handleMoveMove = (event) => {
    setMousePosition({
      left: event.clientX,
      top: event.clientY,
    });
  };

  return (
    <div onMouseMove={handleMoveMove}>
      <div className="fixed mx-10 top-0 right-0 z-10">
        <LanguageToggle />
      </div>
      {/* <Menu /> */}
      {children}
      <MouseOverlay mousePosition={mousePosition} />
      <Partners />
    </div>
  );
}

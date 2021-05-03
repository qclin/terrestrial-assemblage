import React, { useState } from "react";
import MouseOverlay from "./mouseOverlay";
import "./layout.css";
import LanguageToggle from "./languageToggle";
import Menu from "./menu";

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
      <Menu />
      <LanguageToggle />
      {children}
      <MouseOverlay mousePosition={mousePosition} />
    </div>
  );
}

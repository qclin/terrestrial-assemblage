import React, { useState } from "react";
import MouseOverlay from "./mouseOverlay";
import Partners from "./partners";
import "./layout.css";
import LanguageToggle from "./languageToggle";
import Menu from "./menu";

export default function Layout({ children }) {
  // const [mousePosition, setMousePosition] = useState({
  //   left: 0,
  //   top: 0,
  // });
  // const handleMoveMove = (event) => {
  //   setMousePosition({
  //     left: event.clientX,
  //     top: event.clientY,
  //   });
  // };

  return (
    // <div onMouseMove={handleMoveMove}>
    <div>
      <Menu />

      <div className="fixed mx-10 top-0 right-0">
        <LanguageToggle />
      </div>

      {children}
      {/* <MouseOverlay mousePosition={mousePosition} /> */}
      <Partners />
    </div>
    // </div>
  );
}

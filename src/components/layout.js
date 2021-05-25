import React, { useState } from "react";
import { navigate, useStaticQuery } from "gatsby";
import MouseOverlay from "./mouseOverlay";
import "./layout.css";
import LanguageToggle from "./languageToggle";
import Menu from "./menu";
import Footer from "./footer";
import BackIcon from "../assets/svgs/icons/back.svg";

export default function Layout({ children, canGoBack }) {
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  const [showAnnouncement, setShowAnnouncement] = useState(false); 
  const handleMoveMove = (event) => {
    setMousePosition({
      left: event.clientX,
      top: event.clientY,
    });
  };

  return (
    <div onMouseMove={handleMoveMove}>
      <Menu onVisit={() => setShowAnnouncement(true)}/>
      <LanguageToggle />
      {canGoBack && (
        <button
          className="fixed top-16 focus:outline-none"
          onClick={() => navigate(-1)}
        >
          <BackIcon className="ml-5" />
        </button>
      )}
      {children}
      <MouseOverlay mousePosition={mousePosition} />
      <div className="md:mt-52 mx-3">
        <Footer onVisit={() => setShowAnnouncement(true)}/>
      </div>
      {showAnnouncement && 
      <div className="fixed inset-10  p-4 overflow-scroll md:overflow-hidden md:inset-32 md:bottom-auto z-50 bg-white md:w-1/2 mx-auto md:py-14 md:px-10 rounded-lg shadow-whiteTint shadow-md bg-white-tint h-min">
        <button className="float-right md:-mt-7 md:-mr-4 text-2xl" onClick={() => setShowAnnouncement(false)}>&#x2715;</button>
        Dear Friends of Terrestrial Assemblage,  
        <br/> <br/>
        On Tuesday evening (on May 18th), we got a short-term notification by the Floating University Berlin, that due to unforeseen bureaucratic hurdles Floating is currently closing its doors for a short break. Public visits on site have to be restricted and we cannot host guests for a short while. Sadly this means that we have to cancel your upcoming visit to the exhibition, "Terrestrial Assemblage" on site for which we apologize. We are terribly sorry and sad about this unexpected situation. In the meanwhile we let the frogs procreate in the reeds undisturbed. We hope to be able to host you back soon.<br/><br/> We will be back shortly. Stay tuned for announcements.
      </div>
      }
    </div>
  );
}

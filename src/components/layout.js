import React, { useState } from "react";
import { navigate } from "gatsby";
import MouseOverlay from "./mouseOverlay";
import "./layout.css";
import LanguageToggle from "./languageToggle";
import Menu from "./menu";
import Footer from "./footer";
import BackIcon from "../assets/svgs/icons/back.svg";
import Video from "./video";
import { LIVESTREAM_URL } from "../constants/constants";
import { Link } from "gatsby-plugin-react-i18next";

export default function Layout({ children, canGoBack, showLivestream }) {
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
  // const timeNow = new Date();
  // const conferenceTime = {
  //   start: new Date("2021-05-18T09:00:00.000+02:00"),
  //   end: new Date("2021-05-18T19:00:00.000+02:00"),
  // };

  // const isStreaming = isWithinInterval(timeNow, { start: conferenceTime });
  return (
    <div onMouseMove={handleMoveMove}>
      <Menu />
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
      {showLivestream && (
        <Link
          to="/livestream"
          className="float-item fixed bottom-20 right-20 hidden md:block"
        >
          <Video
            style={{ height: "300px", width: "500px" }}
            className="mx-auto mt-24 p-2 md:p-2 bg-algea-tint shadow-sm shadow-tintAlgea rounded-sm"
            videoSrcURL={LIVESTREAM_URL + "&controls=0"}
            videoTitle="livestream of the symposium"
          />
        </Link>
      )}
      <MouseOverlay mousePosition={mousePosition} />
      <div className="md:mt-52 mx-3">
        <Footer />
      </div>
    </div>
  );
}

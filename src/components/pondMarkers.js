import React, { useState } from "react";

function PondMarkers({ active }) {
  const radius = 19.5;
  const filter = "url(#blur-edges)";

  const colors = {
    default: "#fff",
    highlight: "#ff0",
  };
  return (
    <svg
      width="514px"
      height="477px"
      viewBox="0 0 514 477"
      version="1.1"
      className="z-10 absolute bottom-0 right-0"
    >
      <defs>
        <filter
          x="-38.5%"
          y="-38.5%"
          width="176.9%"
          height="176.9%"
          filterUnits="objectBoundingBox"
          id="blur-edges"
        >
          <feGaussianBlur stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
        </filter>
      </defs>
      <g stroke="none" fill="none">
        <g fill={colors.default} stroke="#979797">
          <g id="Group">
            <circle
              cx="19.5"
              cy="335.5"
              r={radius}
              filter={filter}
              fill={active === "Ana_Alenso" ? colors.highlight : colors.default}
            ></circle>
            <circle
              cx="316.5"
              cy="271.5"
              r={radius}
              filter={filter}
              fill={
                active === "Anne_Duk_Hee_Jordan"
                  ? colors.highlight
                  : colors.default
              }
            ></circle>
            <circle
              cx="284.5"
              cy="158.5"
              r={radius}
              filter={filter}
              fill={
                active === "Clemens_Wilhelm" ? colors.highlight : colors.default
              }
            ></circle>
            <circle
              cx="360.5"
              cy="115.5"
              r={radius}
              filter={filter}
              fill={
                active === "Folke_Koebberling"
                  ? colors.highlight
                  : colors.default
              }
            ></circle>
            <circle
              cx="443.5"
              cy="193.5"
              r={radius}
              filter={filter}
              fill={
                active === "Han_Seok_Hyun" ? colors.highlight : colors.default
              }
            ></circle>
            <circle
              cx="492.5"
              cy="34.5"
              r={radius}
              filter={filter}
              fill={
                active === "Ines_Doujak" ? colors.highlight : colors.default
              }
            ></circle>
            <circle
              cx="436.5"
              cy="19.5"
              r={radius}
              filter={filter}
              fill={
                active === "Marco_Barotti" ? colors.highlight : colors.default
              }
            ></circle>
            <circle
              cx="103.5"
              cy="144.5"
              r={radius}
              filter={filter}
              fill={
                active === "Mischa_Leinkauf" ? colors.highlight : colors.default
              }
            ></circle>
            <circle
              cx="58.5"
              cy="455.5"
              r={radius}
              filter={filter}
              fill={
                active === "Santiago_Sierra" ? colors.highlight : colors.default
              }
            ></circle>
            <circle
              cx="186.5"
              cy="316.5"
              r={radius}
              filter={filter}
              fill={
                active === "Shira_Wachsmann" ? colors.highlight : colors.default
              }
            ></circle>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default PondMarkers;

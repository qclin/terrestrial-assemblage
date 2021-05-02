import React from "react";

const ARTWORK_POSITIONS = [
  { id: "Anne_Duk_Hee_Jordan", x: 61.4, y: 421.8 },
  { id: "Ana_Alenso", x: 87.4, y: 547.8 },
  { id: "Marco_Barotti", x: 199.4, y: 268.8 },
  { id: "Folke_Koebberling", x: 234.4, y: 465.8 },
  { id: "Mischa_Leinkauf", x: 504.4, y: 438.8 },
  { id: "Han_Seok_Hyun", x: 568.4, y: 45.4 },
  { id: "Ines_Doujak", x: 480.4, y: 320.8 },
  { id: "Clemens_Wilhelm", x: 554.4, y: 420.8 },
  { id: "Mischa_Leinkauf", x: 572.4, y: 244.4 },
  { id: "Santiago_Sierra", x: 613.4, y: 244.4 },
  { id: "Shira_Wachsmann", x: 579.4, y: 128.4 },
];
function PondMarkers({ active }) {
  const radius = 19.5;
  const filter = "url(#blur-edges)";

  const colors = {
    default: "#fff",
    highlight: "#ff0",
  };
  return (
    <svg
      width="660px"
      height="609px"
      viewBox="0 0 660 609"
      version="1.1"
      className="z-0 absolute bottom-5 right-5"
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
          {ARTWORK_POSITIONS.map((artwork) => (
            <circle
              filter={filter}
              r={radius}
              cx={artwork.x}
              cy={artwork.y}
              fill={active === artwork.id ? colors.highlight : colors.default}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

export default PondMarkers;

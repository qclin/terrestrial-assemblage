import React from "react";

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
      className="z-10 absolute bottom-5 right-5"
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
          <circle
            filter={filter}
            r={radius}
            cx="568.4"
            cy="45.4"
            fill={
              active === "Han_Seok_Hyun" ? colors.highlight : colors.default
            }
          />
          <circle
            filter={filter}
            r={radius}
            cx="579.4"
            cy="128.4"
            fill={
              active === "Shira_Wachsmann" ? colors.highlight : colors.default
            }
          />
          <circle
            filter={filter}
            r={radius}
            cx="613.4"
            cy="244.4"
            fill={
              active === "Santiago_Sierra" ? colors.highlight : colors.default
            }
          />
          <circle
            filter={filter}
            r={radius}
            cx="572.4"
            cy="244.4"
            fill={
              active === "Mischa_Leinkauf" ? colors.highlight : colors.default
            }
          />
          <circle
            filter={filter}
            r={radius}
            cx="480.4"
            cy="320.8"
            fill={active === "Ines_Doujak" ? colors.highlight : colors.default}
          />
          <circle
            filter={filter}
            r={radius}
            cx="199.4"
            cy="268.8"
            fill={
              active === "Marco_Barotti" ? colors.highlight : colors.default
            }
          />
          <circle
            filter={filter}
            r={radius}
            cx="61.4"
            cy="421.8"
            fill={
              active === "Anne_Duk_Hee_Jordan"
                ? colors.highlight
                : colors.default
            }
          />
          <circle
            filter={filter}
            r={radius}
            cx="87.4"
            cy="547.8"
            fill={active === "Ana_Alenso" ? colors.highlight : colors.default}
          />
          <circle
            filter={filter}
            r={radius}
            cx="234.4"
            cy="465.8"
            fill={
              active === "Folke_Koebberling" ? colors.highlight : colors.default
            }
          />
          <circle
            filter={filter}
            r={radius}
            cx="504.4"
            cy="438.8"
            fill={
              active === "Mischa_Leinkauf" ? colors.highlight : colors.default
            }
          />
          <circle
            filter={filter}
            r={radius}
            cx="554.4"
            cy="420.8"
            fill={
              active === "Clemens_Wilhelm" ? colors.highlight : colors.default
            }
          />
        </g>
      </g>
    </svg>
  );
}

export default PondMarkers;

import React from "react";

import AnaRicardoSVG from "../assets/svgs/names/Ana-Ricardo.svg";
import ClemensJoakimSVG from "../assets/svgs/names/Clemens_Joakim.svg";
import BernhardSVG from "../assets/svgs/names/Bernhard.svg";
import Kim_SeungSVG from "../assets/svgs/names/Kim_Seung.svg";
import KyungSVG from "../assets/svgs/names/Kyung.svg";
import LianaSVG from "../assets/svgs/names/Liana.svg";
import MelanieSVG from "../assets/svgs/names/Melanie.svg";
import NadavSVG from "../assets/svgs/names/Nadav.svg";
import { ARTISTS } from "../constants/constants";

const nameSvgs = [
  { identifier: "Ana_Ricardo", svg: AnaRicardoSVG },
  { identifier: "Clemens_Joakim", svg: ClemensJoakimSVG },
  { identifier: "Bernhard", svg: BernhardSVG },
  { identifier: "Kim_Seung", svg: Kim_SeungSVG },
  { identifier: "Kyung", svg: KyungSVG },
  { identifier: "Liana", svg: LianaSVG },
  { identifier: "Melanie", svg: MelanieSVG },
  { identifier: "Nadav", svg: NadavSVG },
  ...ARTISTS,
];

function NameVector({ identifier, title, ...props }) {
  if (!identifier) return null;

  const Speaker = nameSvgs.find((vector) => vector.identifier === identifier);
  if (!Speaker) return null;

  return <Speaker.svg {...props} />;
}

export default NameVector;

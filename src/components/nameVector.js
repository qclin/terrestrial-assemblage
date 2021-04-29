import React from "react";
import AnaSVG from "../assets/svgs/names/Ana.svg";
import AnneSVG from "../assets/svgs/names/Anne.svg";
import BernhardSVG from "../assets/svgs/names/Bernhard.svg";
import ClemensSVG from "../assets/svgs/names/Clemens.svg";
import FolkeSVG from "../assets/svgs/names/Folke.svg";
import HanSVG from "../assets/svgs/names/Han.svg";
import InesSVG from "../assets/svgs/names/Ines.svg";
import Kim_SeungSVG from "../assets/svgs/names/Kim_Seung.svg";
import KyungSVG from "../assets/svgs/names/Kyung.svg";
import LianaSVG from "../assets/svgs/names/Liana.svg";
import MarcoSVG from "../assets/svgs/names/Marco.svg";
import MelanieSVG from "../assets/svgs/names/Melanie.svg";
import MischaSVG from "../assets/svgs/names/Mischa.svg";
import NadavSVG from "../assets/svgs/names/Nadav.svg";
import SantiagoSVG from "../assets/svgs/names/Santiago.svg";
import ShiraSVG from "../assets/svgs/names/Shira.svg";

const nameSvgs = [
  { name: "Ana_Alenso", svg: AnaSVG },
  { name: "Anne_Duk_Hee_Jordan", svg: AnneSVG },
  { name: "Bernhard", svg: BernhardSVG },
  { name: "Clemens_Wilhelm", svg: ClemensSVG },
  { name: "Folke_Koebberling", svg: FolkeSVG },
  { name: "Han_Seok_Hyun", svg: HanSVG },
  { name: "Ines_Doujak", svg: InesSVG },
  { name: "Kim_Seung", svg: Kim_SeungSVG },
  { name: "Kyung", svg: KyungSVG },
  { name: "Liana", svg: LianaSVG },
  { name: "Marco_Barotti", svg: MarcoSVG },
  { name: "Melanie", svg: MelanieSVG },
  { name: "Mischa_Leinkauf", svg: MischaSVG },
  { name: "Nadav", svg: NadavSVG },
  { name: "Santiago_Sierra", svg: SantiagoSVG },
  { name: "Shira_Wachsmann", svg: ShiraSVG },
];

function NameVector({ identifier, ...props }) {
  if (!identifier) return null;

  const NameSVG = nameSvgs.find((vector) => vector.name === identifier)?.svg;
  if (!NameSVG) return null;
  return <NameSVG {...props} />;
}

export default NameVector;

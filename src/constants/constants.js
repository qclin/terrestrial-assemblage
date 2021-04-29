import AnaSVG from "../assets/svgs/names/Ana.svg";
import AnneSVG from "../assets/svgs/names/Anne.svg";
import ClemensSVG from "../assets/svgs/names/Clemens.svg";
import FolkeSVG from "../assets/svgs/names/Folke.svg";
import HanSVG from "../assets/svgs/names/Han.svg";
import InesSVG from "../assets/svgs/names/Ines.svg";
import MarcoSVG from "../assets/svgs/names/Marco.svg";
import MischaSVG from "../assets/svgs/names/Mischa.svg";
import SantiagoSVG from "../assets/svgs/names/Santiago.svg";
import ShiraSVG from "../assets/svgs/names/Shira.svg";

export const ARTISTS = [
  { identifier: "Ana_Alenso", svg: AnaSVG },
  { identifier: "Anne_Duk_Hee_Jordan", svg: AnneSVG },
  { identifier: "Clemens_Wilhelm", svg: ClemensSVG },
  { identifier: "Folke_Koebberling", svg: FolkeSVG },
  { identifier: "Han_Seok_Hyun", svg: HanSVG },
  { identifier: "Ines_Doujak", svg: InesSVG },
  { identifier: "Marco_Barotti", svg: MarcoSVG },
  { identifier: "Mischa_Leinkauf", svg: MischaSVG },
  { identifier: "Santiago_Sierra", svg: SantiagoSVG },
  { identifier: "Shira_Wachsmann", svg: ShiraSVG },
];

export const ARTIST_MEDIA = {
  Clemens_Wilhelm: {
    video: "https://player.vimeo.com/video/260849191",
  },
  Ines_Doujak: {
    podcast:
      "https://liverpoolbiennial2021.com/programme/ines-doujak-john-barker-transmission-a-series-of-five-podcasts-on-disease-and-pandemics-in-a-distorted-world/",
  },
  Marco_Barotti: {
    video: "https://player.vimeo.com/video/372061141",
  },
  Mischa_Leinkauf: {
    video: "https://player.vimeo.com/video/402611948",
    password: "leinkauf",
  },
  Santiago_Sierra: {
    video: "https://www.youtube.com/embed/rt6vz10OEus",
  },
};

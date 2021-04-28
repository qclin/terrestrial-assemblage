import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import TerrestrialTextSvg from "../../assets/svgs/headers/terrestrial.svg";

function Hero({ path }) {
  const [scrollY, setScollY] = useState(0);
  const handlePageScroll = (event) => {
    setScollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
    return () => {
      window.removeEventListener("scroll", handlePageScroll);
    };
  }, []);

  return (
    <div className="grid fixed top-0" style={{ zIndex: -20 }}>
      <StaticImage
        style={{ gridArea: "1/1", height: "100vh" }}
        layout="constrained"
        alt="Floating University pond with micro-ecoloogies"
        src={"../assets/images/background/1-WORM-LT.jpg"}
        placeholder="blurred"
      />
      <div
        className="grid relative place-items-center"
        style={{
          gridArea: "1/1",
        }}
      >
        <marquee width="100%" direction="left" scrollamount="1">
          <TerrestrialTextSvg
            style={{
              height: "50vh",
              filter: `blur(${!path ? scrollY / 200 : 10}px)`,
            }}
          />
        </marquee>
      </div>
      <StaticImage
        style={{ gridArea: "1/1", height: "100vh" }}
        layout="constrained"
        alt="Reflections of the Rain pavillion on Algea debris"
        src={"../assets/images/algea/main.png"}
        placeholder="blurred"
      />
    </div>
  );
}

export default Hero;

// Dynamic loading image

// const { backgroundImages } = useStaticQuery(graphql`
// query {
//   backgroundImages: allFile(
//     filter: {
//       extension: { regex: "/(jpeg|jpg|png)/" }
//       sourceInstanceName: { eq: "background" }
//     }
//   ) {
//     nodes {
//       childImageSharp {
//         gatsbyImageData
//       }
//       name
//     }
//   }
// }
// `);

// const backgroundPath = () => {
//   var imageName = "1-WORM-LT";

//   if (!path) {
//     imageName = "1-WORM-LT";
//   } else if (path.includes("artist")) {
//     imageName = "6-MUDDY";
//   } else if (path.includes("program")) {
//     imageName = "7-LEAFY";
//   } else if (path.includes("about")) {
//     imageName = "2-RIPPLES";
//   } else if (path.includes("exhibition")) {
//     imageName = "4-DRIP";
//   }

//   const imageNode = backgroundImages.nodes.find((n) => n.name === imageName);
//   return imageNode;
// };

// const bgImage = getImage(backgroundPath());

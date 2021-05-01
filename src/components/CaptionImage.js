import React from "react";
import BgHighlight from "./BgHighlight";
import clsx from "clsx";

const CLASSES = {
  image: "filter grayscale hover:filter-none",
};

function CaptionImage({ image, captions, index }) {
  const caption = captions?.find((cap) =>
    image.node.public_id.includes(cap.image)
  );

  return (
    <div
      className={clsx(
        index % 3 === 0 && index > 0 && "md:col-end-6",
        index % 2 === 0 && index > 0 && "md:col-span-4",
        index === 0 ? "md:col-span-6" : "md:col-span-2"
      )}
    >
      <img
        className={CLASSES.image}
        src={image.node.secure_url}
        alt={image.key}
      />
      {caption && (
        <BgHighlight>
          <span className="text-white text-sm">{caption.caption}</span>
        </BgHighlight>
      )}
    </div>
  );
}

export default CaptionImage;

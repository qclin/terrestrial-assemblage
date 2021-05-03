import React from "react";

const CLASSES = {
  image: "filter grayscale hover:filter-none",
};

function CaptionImage({ image, captions }) {
  const caption = captions?.find((cap) =>
    image.node.public_id.includes(cap.image)
  );

  return (
    <figure>
      <img
        className={CLASSES.image}
        src={image.node.secure_url}
        alt={image.key}
      />
      {caption && (
        <figcaption
          className="text-white text-sm bg-button"
          style={{ width: "fit-content" }}
        >
          {caption.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default CaptionImage;

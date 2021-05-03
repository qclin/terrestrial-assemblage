import * as React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.24)",
  },
};

function PreviewModal({ captions, image, onClose }) {
  const caption = captions?.find((cap) =>
    image.node.public_id.includes(cap.image)
  );

  return (
    <Modal isOpen={image} onRequestClose={onClose} style={customStyles}>
      <button
        className="text-white float-right focus:outline-none"
        style={{ marginRight: "-1rem" }}
        onClick={onClose}
      >
        <span className="text-3xl font-light">X</span>
      </button>
      <figure>
        <img
          // style={{ height: "80vh" }}
          className="md:h-modal"
          src={image.node.secure_url}
          alt={image.key}
        />
        <figcaption className="text-white text-sm bg-button">
          {caption?.caption}
        </figcaption>
      </figure>
    </Modal>
  );
}

export default PreviewModal;

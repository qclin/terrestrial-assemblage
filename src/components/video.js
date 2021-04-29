import React from "react";
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video my-5">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      width="100%"
      height={800}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      {...props}
    />
  </div>
);
export default Video;

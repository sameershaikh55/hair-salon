import React from "react";
import Container from "../layout/Container";

const Video = () => {
  return (
    <Container parentClass="video">
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/rVXNpNIYlGk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Container>
  );
};

export default Video;

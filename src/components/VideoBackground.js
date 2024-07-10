import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-[100%] h-[100vh]">
      <div className="w-full h-full aspect-">
        <iframe
          className="w-full h-full"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?si=7X-MQAwNzBg0ICSN&autoplay=1&mute=1&controls=0&rel=0&loop=1"
          }
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;

import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-96 px-10 absolute text-white ">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="flex gap-5">
        <button className="flex justify-center items-center gap-3 hover:bg-opacity-80 bg-white text-black md:py-2 px-3 md:px-6 text-md md:text-lg font-bold  rounded-sm">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              role="img"
              data-icon="PlayStandard"
              aria-hidden="true"
            >
              <path
                d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                fill="black"
              ></path>
            </svg>
          </div>
          Play
        </button>
        <button className="flex items-center gap-3 bg-gray-600 hover:bg-gray-700 bg-opacity-85 text-white py-2 md:py-3 px-5 md:px-8 text-xl rounded-sm">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              data-icon="CircleIStandard"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

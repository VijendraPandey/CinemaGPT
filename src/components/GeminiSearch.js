import React from "react";
import GeminiSearchBar from "./GeminiSearchBar";
import GeminiMovieSuggestions from "./GeminiMovieSuggestions";
import { bgImage } from "../utils/constants";

const GeminiSearch = () => {
  return (
    <>
      <div className="fixed inset-0 -z-30">
        <img
          src={bgImage}
          alt="bg-img"
          className="h-[100%] w-[100%] overflow-hidden object-cover"
        />
      </div>
      <div className="">
        <GeminiSearchBar />
        <GeminiMovieSuggestions />
      </div>
    </>
  );
};

export default GeminiSearch;

import React from "react";
import GeminiSearchBar from "./GeminiSearchBar";
import GeminiMovieSuggestions from "./GeminiMovieSuggestions";
import { bgImage } from "../utils/constants";

const GeminiSearch = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="fixed inset-0 -z-30">
        <img
          src={bgImage}
          alt="bg-img"
          className="w-full h-full object-cover"
        />
      </div>
      <GeminiSearchBar />
      <GeminiMovieSuggestions />
    </div>
  );
};

export default GeminiSearch;

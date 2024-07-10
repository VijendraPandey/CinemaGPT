import React, { useRef } from "react";
import { API_OPTIONS, GEMINI_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGeminiMovieResult } from "../utils/geminiSlice";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GeminiSearchBar = () => {
  const dispatch = useDispatch();

  const searchText = useRef(null);

  const genAI = new GoogleGenerativeAI(GEMINI_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();

    // console.log(json);
    return json.results;
  };

  const handleGeminiSearchClick = async () => {
    const prompt =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 10 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Koi Mil Gaya";

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      const geminiMovies = text.split(", ");

      const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);

      dispatch(
        addGeminiMovieResult({
          movieNames: geminiMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="What would you like to watch today?"
        ></input>
        <button
          onClick={handleGeminiSearchClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;

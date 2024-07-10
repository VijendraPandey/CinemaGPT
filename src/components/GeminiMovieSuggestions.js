import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GeminiMovieSuggestions = () => {
  const { geminiMovies, geminiMovieNames } = useSelector(
    (store) => store.gemini
  );
  if (!geminiMovieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {geminiMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={geminiMovies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GeminiMovieSuggestions;

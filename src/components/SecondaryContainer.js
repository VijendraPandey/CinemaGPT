import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="-mt-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies.nowUpcomingMovies}
        />
        <MovieList title={"Top Rated"} movies={movies.nowTopRatedMovies} />
        <MovieList title={"Popular"} movies={movies.nowPopularMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;

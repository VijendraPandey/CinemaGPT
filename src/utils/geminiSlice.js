import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    showGeminiSearch: false,
    geminiMovies: null,
    geminiMovieNames: null,
  },
  reducers: {
    toggleGeminiSearchView: (state) => {
      state.showGeminiSearch = !state.showGeminiSearch;
    },
    addGeminiMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.geminiMovies = movieResults;
      state.geminiMovieNames = movieNames;
    },
  },
});

export const { toggleGeminiSearchView, addGeminiMovieResult } =
  geminiSlice.actions;

export default geminiSlice.reducer;

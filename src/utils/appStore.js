import { configureStore } from "@reduxjs/toolkit";
import userRedcer from "./userSlice";
import movieReducer from "./movieSlice";
import geminiReducer from "./geminiSlice";

const appStore = configureStore({
  reducer: {
    user: userRedcer,
    movies: movieReducer,
    gemini: geminiReducer,
  },
});

export default appStore;

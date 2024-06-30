import { configureStore } from "@reduxjs/toolkit";
import userRedcer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userRedcer,
    movies: movieReducer,
  },
});

export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import userRedcer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userRedcer,
  },
});

export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "../features/fetchSlice";

const store = configureStore({
  reducer: {
    lastfm: fetchSlice,
  },
});

export default store;

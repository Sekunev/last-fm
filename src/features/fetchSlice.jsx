import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  darkMode: true,
};

const fetchSlice = createSlice({
  name: "lastfm",
  initialState,
  reducers: {
    fetchError: (state) => {
      state.error = true;
    },
    setDarkMode: (state, { payload }) => {
      state.darkMode = payload;
    },
  },
});

export const { fetchError, setDarkMode } = fetchSlice.actions;

export default fetchSlice.reducer;

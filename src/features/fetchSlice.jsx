import { createSlice } from "@reduxjs/toolkit";

//! STATE'LER VE BAŞLANGIÇ DEĞERLERİ
const initialState = {
  error: false,
  darkMode: true,
};

//! SLİCE 3 DEĞER BEKLER. AŞAĞIDA. REDUCER'DE DISPATCH İLE ÇALIŞTIRLACAK METODLARI TANIMLADIK.
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

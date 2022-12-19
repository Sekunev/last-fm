import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "../features/fetchSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// persist kütüphanesi state'lerin kalıcı bir hafızada saklanmasını sağlıyor. Redux ile birlikte kullanılıyor. Bu bize örneğin sayfa yenilendiğinde state'lerin silinmemesini ve tekrar login olma gererkliliğini ortadan kaldırıyor.

// adres(https://www.npmjs.com/package/redux-persist/v/6.0.0)

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, fetchSlice);

const store = configureStore({
  reducer: {
    lastfm: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;

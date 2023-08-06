import { configureStore } from "@reduxjs/toolkit";
import { catsApi } from "../services/catsService";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [catsApi.reducerPath]: catsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catsApi.middleware),
});

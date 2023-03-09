import { configureStore } from "@reduxjs/toolkit";
import { appStateReducer } from "./slices";
import middleware from "./listeners/create-post";

export const store = configureStore({
  reducer: {
    AppState: appStateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(middleware),
});

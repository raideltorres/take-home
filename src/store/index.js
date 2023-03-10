import { configureStore } from "@reduxjs/toolkit";
import { appStateReducer } from "./slices";
import listeners from "./listeners";

export const store = configureStore({
  reducer: {
    AppState: appStateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listeners),
});

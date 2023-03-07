import { configureStore } from '@reduxjs/toolkit';
import { appStateReducer } from './slices';

export const store = configureStore({
  reducer: {
    AppState: appStateReducer,
  },
});

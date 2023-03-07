import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
  name: "app-state",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    updateSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

export const { updateSearchTerm } = appStateSlice.actions;

export default appStateSlice.reducer;

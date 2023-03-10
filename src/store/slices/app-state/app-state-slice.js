import { createSlice } from "@reduxjs/toolkit";
import { getObjectFromLocalStorage } from "@helpers/local-storage";

export const appStateSlice = createSlice({
  name: "app-state",
  initialState: {
    searchTerm: "",
    posts: getObjectFromLocalStorage({ key: "posts" }) || [],
  },
  reducers: {
    createPost: () => undefined,
    editPost: () => undefined,
    deletePost: () => undefined,
    updatePosts: (state, { payload }) => {
      state.posts = payload;
    },
    updateSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

export const { updateSearchTerm, createPost, updatePosts, deletePost, editPost } = appStateSlice.actions;

export default appStateSlice.reducer;

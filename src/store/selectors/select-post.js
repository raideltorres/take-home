import { createSelector } from "@reduxjs/toolkit";
import selectAppStateRaw from "./select-app-state-raw";

export default createSelector([selectAppStateRaw, (_, postId) => postId], ({ posts }, postId) =>
  posts.find(({ id }) => id === Number(postId))
);

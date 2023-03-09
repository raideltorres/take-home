// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import { createListenerMiddleware } from "@reduxjs/toolkit";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------
import { createPost, updatePosts } from "@store/slices/app-state/app-state-slice";

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
import { getObjectFromLocalStorage, saveObjectToLocalStorage } from "@helpers/local-storage";

// -----------------------------------------------------------------------------
// Effect
// -----------------------------------------------------------------------------
export const effect = async ({ payload }, { dispatch }) => {
  const currentPosts = getObjectFromLocalStorage({ key: "posts" });
  const posts = currentPosts ? currentPosts.concat([payload]) : [payload];

  saveObjectToLocalStorage({ key: "posts", value: posts });
  dispatch(updatePosts(posts));
};

// -----------------------------------------------------------------------------
// Listener middleware
// -----------------------------------------------------------------------------
const { startListening, middleware } = createListenerMiddleware();

// -----------------------------------------------------------------------------
// Listener
// -----------------------------------------------------------------------------
startListening({
  actionCreator: createPost,
  effect,
});

export default middleware;

// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import { createListenerMiddleware } from "@reduxjs/toolkit";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------
import { selectPosts } from "@store/selectors";
import { deletePost, updatePosts } from "@store/slices/app-state/app-state-slice";

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
import { saveObjectToLocalStorage } from "@helpers/local-storage";

// -----------------------------------------------------------------------------
// Effect
// -----------------------------------------------------------------------------
export const effect = async ({ payload }, { dispatch, getState }) => {
  const currentPosts = selectPosts(getState());
  const posts = currentPosts.filter(({ id }) => id !== Number(payload));

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
  actionCreator: deletePost,
  effect,
});

export default middleware;

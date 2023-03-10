// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import { createListenerMiddleware } from "@reduxjs/toolkit";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------
import { selectPosts } from "@store/selectors";
import { editPost, updatePosts } from "@store/slices/app-state/app-state-slice";

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
import { saveObjectToLocalStorage } from "@helpers/local-storage";

// -----------------------------------------------------------------------------
// Effect
// -----------------------------------------------------------------------------
export const effect = async ({ payload }, { dispatch, getState }) => {
  const { id } = payload;
  const currentPosts = selectPosts(getState());
  const posts = currentPosts.map((p) => (p.id === Number(id) ? payload : p));

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
  actionCreator: editPost,
  effect,
});

export default middleware;

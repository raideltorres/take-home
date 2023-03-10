// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import { createListenerMiddleware } from "@reduxjs/toolkit";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------
import { selectPosts } from "@store/selectors";
import { createPost, updatePosts } from "@store/slices/app-state/app-state-slice";

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
import { saveObjectToLocalStorage } from "@helpers/local-storage";

// -----------------------------------------------------------------------------
// Effect
// -----------------------------------------------------------------------------
export const effect = async ({ payload }, { dispatch, getState }) => {
  const currentPosts = selectPosts(getState());
  const maxId = currentPosts.reduce((max, { id }) => (id > max ? id : max), currentPosts[0].id);
  const posts = currentPosts ? currentPosts.concat([{ ...payload, id: maxId + 1 }]) : [{ ...payload, id: maxId + 1 }];

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

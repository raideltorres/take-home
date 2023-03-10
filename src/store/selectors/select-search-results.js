import Fuse from "fuse.js";
import { createSelector } from "@reduxjs/toolkit";
import selectPosts from "./select-posts";
import selectSearchTerm from "./select-search-term";

export default createSelector(selectPosts, selectSearchTerm, (posts, searchTerm) => {
  if (searchTerm) {
    const fuse = new Fuse(posts, {
      includeScore: true,
      useExtendedSearch: true,
      keys: ["title", "content"],
    });

    const correctedSearchTerm = searchTerm.trim().replace(/\s+/g, " ").replace(/\s/g, " '");
    const result = fuse.search(`'${correctedSearchTerm}`);

    return result.map((r) => r.item);
  }

  return [];
});

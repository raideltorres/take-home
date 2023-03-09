// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React from "react";
import { useSelector } from "react-redux";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------
import { selectPosts } from "@store/selectors";

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
import { Card } from "@atoms/card";
import { NoResults } from "@atoms/no-results";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledPostsGallery from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const PostsGallery = () => {
  const posts = useSelector(selectPosts);

  return (
    <StyledPostsGallery className="th-posts-gallery">
      {posts.map(({ title, content }, index) => (
        <Card key={`posts-gallery-post-${index}`} title={title} body={content} />
      ))}
      {!posts.length && <NoResults text="No posts yet, create one!" />}
    </StyledPostsGallery>
  );
};

export default PostsGallery;

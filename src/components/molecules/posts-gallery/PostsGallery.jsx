// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const posts = useSelector(selectPosts);

  const onCardClick = useCallback((id) => {
    navigate(`/post/${id}`);
  }, []);

  return (
    <StyledPostsGallery className="th-posts-gallery">
      {posts.map((params, index) => (
        <Card key={`posts-gallery-post-${index}`} onClick={onCardClick} {...params} />
      ))}
      {!posts.length && <NoResults text="No posts yet, create one!" />}
    </StyledPostsGallery>
  );
};

export default PostsGallery;

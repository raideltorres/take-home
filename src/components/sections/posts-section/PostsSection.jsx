// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React, { useCallback, useState } from "react";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
import { FilledButton } from "@atoms/filled-button";
import { PostFormModal } from "@molecules/post-form-modal";
import { PostsGallery } from "@molecules/posts-gallery";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import { variables } from "@theme/theme-provider/variables";
import StyledPostsSection from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const PostsSection = () => {
  const [postFormModalOpen, setPostFormModalOpen] = useState(false);

  const onCreatePost = useCallback(() => {
    setPostFormModalOpen(true);
  }, []);

  return (
    <StyledPostsSection className="th-posts-section">
      <div className="th-posts-section__create">
        <FilledButton
          backgroundColor={variables.colors.tenn}
          color={variables.colors.white}
          hoverBackgroundColor={variables.colors.richGold}
          onClick={onCreatePost}
        >
          Create Post
        </FilledButton>
      </div>
      <PostsGallery />
      <PostFormModal open={postFormModalOpen} setOpen={setPostFormModalOpen} />
    </StyledPostsSection>
  );
};

export default PostsSection;

// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------
import { selectPost } from "@store/selectors";
import { deletePost } from "@store/slices/app-state/app-state-slice";

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
import { Card } from "@atoms/card";
import { PostFormModal } from "@molecules/post-form-modal";
import { FilledButton } from "@atoms/filled-button";
import { EditIcon, TrashIcon } from "@atoms/icons";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import { variables } from "@theme/theme-provider/variables";
import StyledPostsSection from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const PostSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [postFormModalOpen, setPostFormModalOpen] = useState(false);
  const post = useSelector((state) => selectPost(state, postId));

  useEffect(() => {
    if (!post) {
      navigate(`/blog`);
    }
  }, [post]);

  const onPostEdit = useCallback(() => {
    setPostFormModalOpen(true);
  }, []);

  const onPostDelete = useCallback(() => {
    dispatch(deletePost(postId));
    navigate(`/blog`);
  }, []);

  return (
    <StyledPostsSection className="th-post-section">
      <div className="th-post-section__actions">
        <FilledButton
          backgroundColor={variables.colors.tenn}
          color={variables.colors.white}
          hoverBackgroundColor={variables.colors.richGold}
          onClick={onPostEdit}
        >
          <EditIcon />
          <span>Edit</span>
        </FilledButton>
        <FilledButton
          backgroundColor={variables.colors.tenn}
          color={variables.colors.white}
          hoverBackgroundColor={variables.colors.richGold}
          onClick={onPostDelete}
        >
          <TrashIcon />
          <span>Delete</span>
        </FilledButton>
      </div>
      <div className="th-post-section__card">
        <Card {...post} />
      </div>
      <PostFormModal open={postFormModalOpen} setOpen={setPostFormModalOpen} selectedPost={post} />
    </StyledPostsSection>
  );
};

export default PostSection;

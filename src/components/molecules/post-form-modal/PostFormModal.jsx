// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import cx from "classnames";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------
import { createPost } from "@store/slices/app-state/app-state-slice";
import { selectPosts } from "@store/selectors";

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
import { Modal } from "@atoms/modal";
import { PostForm } from "@molecules/post-form";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledPostFormModal from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const PostFormModal = ({ className, open, setOpen }) => {
  const posts = useSelector(selectPosts);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();

  const onFinish = useCallback(
    (data) => {
      dispatch(createPost({ ...data, id: posts.length + 1 }));
      setOpen(false);

      api["success"]({
        message: "Post Created",
      });
    },
    [posts]
  );

  return (
    <StyledPostFormModal className={cx([className, "th-post-form-modal"])}>
      {contextHolder}
      {open && (
        <Modal open={open} setOpen={setOpen} title="TODO">
          <PostForm selectedPost={{}} onFinish={onFinish} />
        </Modal>
      )}
    </StyledPostFormModal>
  );
};

export default PostFormModal;

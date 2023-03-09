// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React from "react";
import cx from "classnames";
import { Form, Input } from "antd";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
import { FilledButton } from "@atoms/filled-button";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import { variables } from "@theme/theme-provider/variables";
import StyledPostForm from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const PostForm = ({ className, selectedPost, onFinish }) => {
  return (
    <StyledPostForm className={cx([className, "th-post-form"])}>
      <Form layout="vertical" onFinish={onFinish} initialValues={selectedPost} className="th-post-form__form">
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="content"
          label="Content"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={6} />
        </Form.Item>
        <Form.Item>
          <FilledButton
            className="th-post-form__form__button"
            backgroundColor={variables.colors.tenn}
            color={variables.colors.white}
            hoverBackgroundColor={variables.colors.richGold}
          >
            Save
          </FilledButton>
        </Form.Item>
      </Form>
    </StyledPostForm>
  );
};

export default PostForm;

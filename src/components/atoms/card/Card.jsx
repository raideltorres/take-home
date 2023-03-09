// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React from "react";
import DOMPurify from "dompurify";
import cx from "classnames";
import { Card as AntdCard } from "antd";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledCard from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const Card = ({ className, title, body }) => {
  const sanitizedData = (data) => ({
    __html: DOMPurify.sanitize(data),
  });

  return (
    <StyledCard className={cx([className, "th-card"])}>
      <AntdCard className="th-card__card" title={title} hoverable>
        <div dangerouslySetInnerHTML={sanitizedData(`<p>${body}</p>`)} />
      </AntdCard>
    </StyledCard>
  );
};

export default Card;

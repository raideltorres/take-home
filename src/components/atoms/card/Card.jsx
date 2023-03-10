// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React, { useCallback } from "react";
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
const Card = ({ className, title, content, id, onClick }) => {
  const sanitizedData = (data) => ({
    __html: DOMPurify.sanitize(data),
  });

  const onCardClick = useCallback(() => {
    onClick(id);
  }, []);

  return (
    <StyledCard className={cx([className, "th-card"])}>
      <AntdCard className="th-card__card" title={title} onClick={onCardClick} hoverable>
        <div dangerouslySetInnerHTML={sanitizedData(`<p>${content}</p>`)} />
      </AntdCard>
    </StyledCard>
  );
};

export default Card;

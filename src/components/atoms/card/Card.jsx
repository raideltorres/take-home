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
import { bem } from "@helpers/bem";
import StyledCard from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const Card = ({ className, title, content, type, id, onClick }) => {
  const sanitizedData = (data) => ({
    __html: DOMPurify.sanitize(data),
  });

  const onCardClick = useCallback(() => {
    onClick(id);
  }, []);

  return (
    <StyledCard className={cx([className, bem`th-card--${{ [type]: true }}`])}>
      <AntdCard className="th-card__card" title={title} onClick={onCardClick} hoverable>
        <div className="th-card__card__content" dangerouslySetInnerHTML={sanitizedData(`<p>${content}</p>`)} />
      </AntdCard>
    </StyledCard>
  );
};

export default Card;

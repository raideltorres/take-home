// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React from "react";
import cx from "classnames";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledFilledButton from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const FilledButton = ({ className, backgroundColor, color, hoverBackgroundColor, hoverColor, children, onClick }) => {
  return (
    <StyledFilledButton
      className={cx([className])}
      backgroundColor={backgroundColor}
      color={color}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      {children}
    </StyledFilledButton>
  );
};

export default FilledButton;

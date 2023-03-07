// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React from "react";

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
const FilledButton = ({ backgroundColor, color, hoverBackgroundColor, hoverColor, children, onClick }) => {
  return (
    <StyledFilledButton
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

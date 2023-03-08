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
import { LogoImage } from "@atoms/logo-image";
import { MainMenu } from "@molecules/main-menu";
import { Search } from "@molecules/search";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledHeaderSection from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const HeaderSection = () => {
  return (
    <StyledHeaderSection className="th-header-section">
      <LogoImage className="th-header-section__logo" />
      <MainMenu className="th-header-section__menu" />
      <Search className="th-header-section__search" />
    </StyledHeaderSection>
  );
};

export default HeaderSection;

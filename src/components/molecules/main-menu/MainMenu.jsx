// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React from "react";
import { Link } from "react-router-dom";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledMainMenu from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const MainMenu = () => {
  return (
    <StyledMainMenu className="th-main-menu">
      <ul className="th-main-menu__list">
        <li className="th-main-menu__list__item">
          <Link to="#">Home</Link>
        </li>
        <li className="th-main-menu__list__item">
          <Link to="#">About</Link>
        </li>
        <li className="th-main-menu__list__item">
          <Link to="#">Blog</Link>
        </li>
        <li className="th-main-menu__list__item">
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </StyledMainMenu>
  );
};

export default MainMenu;

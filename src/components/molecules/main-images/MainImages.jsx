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
import StyledMainImages from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const MainImages = ({ className }) => {
  return (
    <StyledMainImages className={cx([className, "th-main-images"])}>
      <div className="th-main-images__top">
        <img src="https://placehold.co/160x160/webp?text=1" alt="random image 1" />
        <p className="th-main-images__top__text">
          Nam in diam at dolor rutrum finibus et eu elit. Proin porta vel arcu a viverra. Aliquam ornare massa eu risus
          malesuada auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Aliquam orci metus, tristique sed arcu at, imperdiet sollicitudin dui. Curabitur luctus, mi et interdum
          fermentum, mi lorem accumsan sem, vel tincidunt mauris turpis eu metus. Vivamus et risus eget diam semper
          elementum.
        </p>
      </div>
      <div className="th-main-images__bottom">
        <img src="https://placehold.co/160x160/webp?text=2" alt="random image 2" />
        <img src="https://placehold.co/160x160/webp?text=3" alt="random image 3" />
        <img src="https://placehold.co/160x160/webp?text=4" alt="random image 4" />
      </div>
    </StyledMainImages>
  );
};

export default MainImages;

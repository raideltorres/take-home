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
import { HeroImage } from "@atoms/hero-image";
import { MainVideo } from "@molecules/main-video";
import { MainImages } from "@molecules/main-images";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledHomeSection from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const HomeSection = () => {
  return (
    <StyledHomeSection className="th-home-section">
      <HeroImage
        image={`https://placehold.co/2000x600/webp?text=Hero+Image`}
        imageDesktop={`https://placehold.co/1000x400/webp?text=Hero+Image`}
        imageTablet={`https://placehold.co/800x400/webp?text=Hero+Image`}
        imageMobile={`https://placehold.co/700x400/webp?text=H`}
        title="Lorem Ipsum"
        description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />
      <div className="th-home-section__content">
        <MainVideo className="th-home-section__content__video" />
        <MainImages className="th-home-section__content__images" />
      </div>
    </StyledHomeSection>
  );
};

export default HomeSection;

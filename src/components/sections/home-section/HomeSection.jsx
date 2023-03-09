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

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledHomeSection from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const HomeSection = () => {
  return (
    <StyledHomeSection>
      <HeroImage
        image={`https://placehold.co/2000x600/webp?text=Hero+Image`}
        imageDesktop={`https://placehold.co/1000x400/webp?text=Hero+Image`}
        imageTablet={`https://placehold.co/800x400/webp?text=Hero+Image`}
        imageMobile={`https://placehold.co/700x400/webp?text=H`}
        title="Lorem Ipsum"
        description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />
    </StyledHomeSection>
  );
};

export default HomeSection;

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
import { Video } from "@molecules/video";

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
      <div className="th-home-section__video">
        <p className="th-home-section__video__text">
          Nam in diam at dolor rutrum finibus et eu elit. Proin porta vel arcu a viverra. Aliquam ornare massa eu risus
          malesuada auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Aliquam orci metus, tristique sed arcu at, imperdiet sollicitudin dui. Curabitur luctus, mi et interdum
          fermentum, mi lorem accumsan sem, vel tincidunt mauris turpis eu metus. Vivamus et risus eget diam semper
          elementum.
        </p>
        <Video src="https://www.youtube.com/watch?v=ScMzIvxBSi4&html5=true" />
      </div>
      <div className="th-home-section__images"></div>
    </StyledHomeSection>
  );
};

export default HomeSection;

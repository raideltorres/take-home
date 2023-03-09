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
import StyledMainVideo from "./style";
import VideoPlayer from "../../atoms/video-player/VideoPlayer";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const MainVideo = ({ className }) => {
  return (
    <StyledMainVideo className={cx([className, "th-main-video"])}>
      <p className="th-main-video__text">
        Nam in diam at dolor rutrum finibus et eu elit. Proin porta vel arcu a viverra. Aliquam ornare massa eu risus
        malesuada auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam
        orci metus, tristique sed arcu at, imperdiet sollicitudin dui. Curabitur luctus, mi et interdum fermentum, mi
        lorem accumsan sem, vel tincidunt mauris turpis eu metus. Vivamus et risus eget diam semper elementum.
      </p>
      <VideoPlayer className="th-main-video__player" url="https://www.youtube.com/watch?v=ScMzIvxBSi4&html5=true" />
    </StyledMainVideo>
  );
};

export default MainVideo;

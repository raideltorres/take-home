// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React from "react";
import cx from "classnames";
import ReactPlayer from "react-player/youtube";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledVideoPlayer from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const VideoPlayer = ({ className, url }) => {
  return (
    <StyledVideoPlayer className={cx([className, "th-video-player"])}>
      <ReactPlayer
        className="th-video-player__player"
        url={url}
        muted={true}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
      />
    </StyledVideoPlayer>
  );
};

export default VideoPlayer;

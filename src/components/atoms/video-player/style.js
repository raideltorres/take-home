import styled from "styled-components";

const StyledVideoPlayer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 56.25%;

  .th-video-player {
    &__player {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export default StyledVideoPlayer;

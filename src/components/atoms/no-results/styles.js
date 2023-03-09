import styled from "styled-components";

const StyledNoResults = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .th-no-results {
    &__title {
      margin-top: 24px;
    }

    &__icon {
      svg {
        max-width: 200px;
        max-height: 200px;
      }
    }
  }
`;

export default StyledNoResults;

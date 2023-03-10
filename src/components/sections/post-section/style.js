import styled from "styled-components";

const StyledPostSection = styled.div`
  padding: 32px;
  flex-direction: column;
  gap: 32px;

  .th-post-section {
    &__actions {
      width: 100%;
      align-items: center;
      justify-content: center;
      gap: 32px;
      flex-wrap: wrap;
    }

    &__card {
      align-items: center;
      justify-content: center;
    }
  }
`;

export default StyledPostSection;

import styled from "styled-components";

const StyledPostsSection = styled.div`
  padding: 32px;
  flex-direction: column;
  gap: 32px;
  height: 100%;

  .th-posts-section {
    &__create {
      width: 200px;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    padding: 16px;
    gap: 16px;
  }
`;

export default StyledPostsSection;

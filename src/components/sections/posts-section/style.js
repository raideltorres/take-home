import styled from "styled-components";

const StyledPostsSection = styled.div`
  padding: 32px;
  flex-direction: column;
  gap: 32px;

  .th-posts-section {
    &__create {
      width: 200px;
      margin: 0 auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    padding: 16px;
    gap: 16px;
  }
`;

export default StyledPostsSection;

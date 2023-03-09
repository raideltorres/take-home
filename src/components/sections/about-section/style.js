import styled from "styled-components";

const StyledAboutSection = styled.div`
  padding: 32px;
  flex-direction: column;
  gap: 32px;
  text-align: center;

  .th-about-section {
    &__text {
      text-align: justify;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    padding: 16px;
    gap: 16px;
  }
`;

export default StyledAboutSection;

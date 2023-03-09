import styled from "styled-components";

const StyledHomeSection = styled.div`
  padding: 32px;
  gap: 32px;
  flex-direction: column;

  .th-home-section {
    &__video,
    &__images {
      flex-direction: column;
      gap: 32px;
    }

    &__video {
      width: 40%;

      &__text {
        text-align: justify;
      }
    }

    &__images {
      flex-direction: column;
      width: 60%;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    padding: 16px;
  }
`;

export default StyledHomeSection;

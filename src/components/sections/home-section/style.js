import styled from "styled-components";

const StyledHomeSection = styled.div`
  padding: 32px;
  gap: 32px;
  flex-direction: column;

  .th-home-section {
    &__content {
      gap: 64px;

      &__video {
        width: 44%;
      }

      &__images {
        width: 56%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.desktop}) {
    .th-home-section {
      &__content {
        gap: 32px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    .th-home-section {
      &__content {
        flex-direction: column;

        &__video {
          width: 100%;
        }

        &__images {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    padding: 16px;
  }
`;

export default StyledHomeSection;

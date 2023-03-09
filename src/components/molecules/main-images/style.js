import styled from "styled-components";

const StyledMainImages = styled.div`
  flex-direction: column;
  width: 60%;
  gap: 80px;

  .th-main-images {
    &__top,
    &__bottom {
      gap: 16px;

      img {
        width: fit-content;
      }
    }

    &__top {
      &__text {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: justify;
      }
    }

    &__bottom {
      gap: 32px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.desktop}) {
    gap: 32px;

    .th-main-images {
      &__bottom {
        gap: 16px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    .th-main-images {
      &__top {
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }
  }
`;

export default StyledMainImages;

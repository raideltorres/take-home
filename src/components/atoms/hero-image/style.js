import styled from "styled-components";

const StyledHeroImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  position: relative;

  .th-hero-image {
    &__text {
      position: absolute;
      flex-direction: column;
      border-radius: 16px;
      gap: 16px;
      bottom: 16px;
      right: 24px;
      max-width: 300px;
      padding: 16px;
      background-color: rgba(208, 90, 0, 0.2);

      &__title {
        text-align: center;
      }

      &__description {
        text-align: center;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.desktop}) {
    background-image: url(${({ imageDesktop }) => imageDesktop});
  }

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    background-image: url(${({ imageTablet }) => imageTablet});
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    background-image: url(${({ imageMobile }) => imageMobile});

    .th-hero-image {
      &__text {
        max-width: 100%;
        border-radius: 0;
        bottom: 0;
        right: 0;
      }
    }
  }
`;

export default StyledHeroImage;

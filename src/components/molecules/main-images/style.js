import styled from "styled-components";

const StyledMainImages = styled.div`
  flex-direction: column;
  width: 60%;
  gap: 80px;

  .th-main-images {
    &__top,
    &__bottom {
      gap: 16px;
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
    }
  }
`;

export default StyledMainImages;

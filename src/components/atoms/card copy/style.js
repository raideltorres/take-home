import styled from "styled-components";

const StyledCard = styled.div`
  width: 350px;
  height: ${({ height }) => height || "400px"};
  max-width: 100%;

  .th-card {
    &__card {
      flex-direction: column;
      width: 100%;
      height: 100%;

      .ant-card-head-title {
        text-align: center;
      }
    }
  }
`;

export default StyledCard;

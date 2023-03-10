import styled from "styled-components";

const StyledCard = styled.div`
  width: 350px;
  height: 400px;
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

  &.th-card--minimal {
    height: auto;

    .ant-card {
      .ant-card-body {
        padding: 8px 16px;
      }

      .ant-card-head {
        min-height: 10px;

        .ant-card-head-title {
          text-align: left;
        }
      }
    }

    .th-card__card__content {
      width: 100%;

      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export default StyledCard;

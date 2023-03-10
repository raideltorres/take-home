import styled from "styled-components";

const StyledMainMenu = styled.div`
  .th-main-menu {
    &__list {
      list-style: none;
      display: flex;
      gap: 16px;
      padding: 0;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      &__item {
        a {
          position: relative;
          text-decoration: none;
          font-size: 24px;
          font-weight: bold;

          &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 1px;
            border-radius: 2px;
            background-color: ${({ theme }) => theme.colors.black};
            bottom: -2px;
            left: 0;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform 0.3s ease-in-out;
          }

          &:hover {
            &:before {
              transform-origin: left;
              transform: scaleX(1);
            }
          }
        }
      }
    }
  }
`;

export default StyledMainMenu;

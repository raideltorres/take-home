import styled from "styled-components";

const StyledSearch = styled.div`
  gap: 8px;
  align-items: flex-end;
  position: relative;

  .th-search {
    &__results {
      position: absolute;
      padding: 16px;
      background-color: ${({ theme }) => theme.colors.concrete};
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
      border-radius: 8px;
      top: 66px;
      right: 0;
      z-index: 1;
      max-width: calc(100vw - 32px);
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledSearch;

import styled from "styled-components";

const StyledHeaderSection = styled.div`
  width: 100%;
  padding: 16px 32px;
  gap: 32px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.responsive.desktop}) {
    .th-header-section {
      &__logo {
        width: 100%;
        justify-content: center;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
    .th-header-section {
      &__menu,
      &__search {
        width: 100%;
        justify-content: center;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    padding: 16px;
  }
`;

export default StyledHeaderSection;

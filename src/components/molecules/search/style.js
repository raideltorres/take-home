import styled from "styled-components";

const StyledSearch = styled.div`
  gap: 8px;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledSearch;

import styled from "styled-components";

const StyledHomeSection = styled.div`
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    padding: 16px;
  }
`;

export default StyledHomeSection;

import styled from "styled-components";

const StyledHeroImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

export default StyledHeroImage;

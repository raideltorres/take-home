import styled from "styled-components";

const StyledFilledButton = styled.button`
  cursor: pointer;
  height: 54px;
  padding: 0 50px;
  border-radius: 8px;
  white-space: nowrap;
  border: none;
  transition: all 0.5s ease;

  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.white};
  color: ${({ color, theme }) => color || theme.colors.black};

  &:hover {
    ${({ hoverBackgroundColor }) => hoverBackgroundColor && `background-color: ${hoverBackgroundColor};`}
    ${({ hoverColor }) => hoverColor && `color: ${hoverColor};`}
  }
`;

export default StyledFilledButton;

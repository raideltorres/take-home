import styled from "styled-components";

const StyledTextInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .th-text-input {
    &__label {
      color: ${({ theme }) => theme.colors.black};
      font-size: 18px;
      font-weight: bold;
    }

    &__input {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    .th-text-input {
      &__label {
        text-align: center;
      }
    }
  }
`;

export default StyledTextInput;

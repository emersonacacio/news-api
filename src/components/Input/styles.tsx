import styled, { css } from "styled-components"

export const InputWrapper = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: none;
    border-bottom: 0.1rem solid ${theme.colors.gray};
    outline: none;
    width: 30rem;
    &:autofill {
      box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.lightGray} inset;
      filter: none;
    }
    &:focus {
      border-color: #007eff;
    }
  `}
`

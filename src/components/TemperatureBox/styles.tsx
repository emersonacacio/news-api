import styled, { css } from "styled-components"

export const WrapperTemperatureBox = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.darkGray};
  `}
`
export const Temperature = styled.div`
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.huge};
    `}
`

export const FeelsLike = styled.div`
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.medium};
    `}
`

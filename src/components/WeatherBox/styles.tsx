import styled, { css } from "styled-components"

export const WrapperWeatherBox = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.darkGray};
`

export const WeatherImg = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`

export const Title = styled.div`
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.xlarge};
    `}
`

export const Description = styled.div`
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.small};
    `}
`
export const City = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `}
`
export const DataWrapper = styled.div`
  display: inline;
`

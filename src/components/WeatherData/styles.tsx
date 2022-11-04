import styled, { css } from "styled-components"

export const WrapperWeatherData = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: 0.5rem;
    svg {
      height: 2.5rem;
      width: 2.5rem;
    }
  `}
`

export const DataBox = styled.span`
  margin-left: 0.5rem;
`

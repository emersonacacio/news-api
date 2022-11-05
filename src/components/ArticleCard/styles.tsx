import styled, { css } from "styled-components"

interface IOpenButton {
  isOpen?: boolean
}

export const WrapperArticleCard = styled.li`
  list-style-type: none;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 0.5rem;
`

export const DataArea = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0;
`

export const TitleArea = styled.div`
  flex: 1;
`

export const Author = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: 0.5rem;
  `}
`

export const OpenButton = styled.div<IOpenButton>`
  ${({ theme, isOpen = false }) =>
    css`
      svg {
        height: ${theme.font.sizes.large};
        transform: rotate(${isOpen ? "0" : "180"}deg);
      }
      &:hover {
        cursor: pointer;
      }
    `}
`

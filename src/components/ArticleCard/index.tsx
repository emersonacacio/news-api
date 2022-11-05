import { MouseEventHandler, useState } from "react"
import { TriangleUp } from "@styled-icons/entypo"
import * as S from "./styles"

export type ArticleCardProps = {
  title: string
  description: string
  author: string
}

export const ArticleCard = ({
  title,
  author,
  description,
}: ArticleCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickShowDescription: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(!isOpen)
  }
  const handleTitleOpenButton = isOpen
    ? "Ocultar a descrição"
    : "Mostra a descrição"

  return (
    <S.WrapperArticleCard>
      <S.DataArea>
        <S.TitleArea>
          <S.Title>Título: {title}</S.Title>
          <S.Author>Autor: {author}</S.Author>
        </S.TitleArea>
        <S.OpenButton
          title={handleTitleOpenButton}
          isOpen={isOpen}
          onClick={handleClickShowDescription}
        >
          <TriangleUp />
        </S.OpenButton>
      </S.DataArea>

      {isOpen && <S.Description>{description}</S.Description>}
    </S.WrapperArticleCard>
  )
}

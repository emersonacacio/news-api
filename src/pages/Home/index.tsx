import { ChangeEventHandler, useState, MouseEventHandler } from "react"
import { ArticleCard } from "components/ArticleCard"
import { Button } from "components/Button"
import { Header } from "components/Header"
import { Input } from "components/Input"
import { getNews } from "api/services"
import { IArticle } from "types/IArticle"
import * as S from "./styles"

function Home(): JSX.Element {
  const [news, setNews] = useState<IArticle[]>([])
  const [startData, setStartData] = useState("")
  const [endData, setEndData] = useState("")
  const [keyword, setKeyword] = useState("")
  const [isErrorKeyword, setIsErrorKeyword] = useState(false)
  const [isErrorStartData, setIsErrorStartData] = useState(false)
  const [isErrorEndData, setIsErrorEndData] = useState(false)
  const [isErrorRequest, setIsErrorRequest] = useState(false)

  const handleChangeKeyword: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setKeyword(value)
  }
  const handleStartData: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setStartData(value)
  }
  const handleEndData: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setEndData(value)
  }
  const handleClickSearch: MouseEventHandler<HTMLButtonElement> = async () => {
    let isDataError = false
    if (!keyword) {
      setIsErrorKeyword(true)
      isDataError = true
    } else {
      setIsErrorKeyword(false)
    }
    if (!startData) {
      setIsErrorStartData(true)
      isDataError = true
    } else {
      setIsErrorStartData(false)
    }
    if (!endData) {
      setIsErrorEndData(true)
      isDataError = true
    } else {
      setIsErrorEndData(false)
    }

    if (!isDataError) {
      try {
        const newsList = await getNews(keyword, startData, endData)
        setNews(newsList)
        setIsErrorRequest(false)
      } catch (error) {
        console.error(error)
        setNews([])
        setIsErrorRequest(true)
      }
    } else {
      setNews([])
    }
  }
  return (
    <>
      <Header />
      <S.Main>
        <S.InputArea>
          <Input
            value={keyword}
            onChange={handleChangeKeyword}
            title="Palavra chave"
            errorMessage="Voçê precisa digitar a palavra chave"
            isError={isErrorKeyword}
          />
          <Input
            value={startData}
            type="date"
            title="Data inicial"
            onChange={handleStartData}
            errorMessage="Voçê precisa digitar a data inicial"
            isError={isErrorStartData}
          />
          <Input
            type="date"
            value={endData}
            onChange={handleEndData}
            title="Data Final"
            errorMessage="Voçê precisa digitar a data final"
            isError={isErrorEndData}
          />
          <Button onClick={handleClickSearch}>Pesquisar</Button>
        </S.InputArea>
        {isErrorRequest && (
          <S.ErrorArea>
            Ocorreu um erro na requisição, tente em outro momento!
          </S.ErrorArea>
        )}
        <S.ResultsArea>
          {news.map((item, i) => (
            <ArticleCard key={`${i}-news`} {...item} />
          ))}
        </S.ResultsArea>
      </S.Main>
    </>
  )
}

export default Home

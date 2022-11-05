import { ArticleCard } from "components/ArticleCard"
import { Button } from "components/Button"
import { Header } from "components/Header"
import { Input } from "components/Input"
import * as S from "./styles"

const props = {
  author: "Devindra Hardawar",
  title:
    "Apple TV 4K review (2022): Still the best streaming box by a long shot",
  description:
    "After Apple finally gave us a decent Siri remote last year, I couldn't imagine the Apple TV 4K getting much better. It's not like anyone is clamoring for an 8K upgrade – all we need these days is support for fast 4K streaming, as well as the multitude of HDR …",
}
function Home(): JSX.Element {
  return (
    <>
      <Header />
      <S.Main>
        <S.InputArea>
          <Input
            title="Palavra chave"
            errorMessage="Voçê precisa digitar a palavra chave"
          />
          <Input
            title="Data inicial"
            errorMessage="Voçê precisa digitar a palavra chave"
          />
          <Input
            title="Data Final"
            errorMessage="Voçê precisa digitar a palavra chave"
          />
          <Button>Pesquisar</Button>
        </S.InputArea>
        <S.ResultsArea>
          <ArticleCard {...props} />
          <ArticleCard {...props} />
          <ArticleCard {...props} />
          <ArticleCard {...props} />
          <ArticleCard {...props} />
          <ArticleCard {...props} />
          <ArticleCard {...props} />
          <ArticleCard {...props} />
          <ArticleCard {...props} />
          <ArticleCard {...props} />
          <ArticleCard {...props} />
          <ArticleCard {...props} />
        </S.ResultsArea>
      </S.Main>
    </>
  )
}

export default Home

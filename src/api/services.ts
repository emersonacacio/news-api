import { IArticle } from "types/IArticle"
import { client } from "./client"

interface IData {
  articles: IArticle[]
}
export async function getNews(
  keyword: string,
  startDate: string,
  endDate: string,
): Promise<IArticle[]> {
  const { data } = await client.get<IData>(
    `/everything?q=${keyword}&from=${startDate}&to=${endDate}&sortBy=popularity&apiKey=4223cb0ed2ba49f9ab084f39a35685d8`,
  )
  return data.articles
}

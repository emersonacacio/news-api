import { ICurrentWeatherData } from "types/ICurrentWeatherData"
import { client } from "./client"

export async function getCurrentWeatherData(
  city: string,
): Promise<ICurrentWeatherData> {
  const { data } = await client.get<ICurrentWeatherData>(
    `/weather?q=${city}&lang=pt_br&appid=2bd69785d66a13d639248d1e74e6bc0d`,
  )
  return data
}

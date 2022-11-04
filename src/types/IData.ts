import { IWeatherData } from "./IWeatherData"

export interface IData {
  weather: IWeatherData
  city: string
  temperature: {
    temp: number
    feelsLike: number
    tempMin: number
    tempMax: number
  }
  pressure: number
  humidity: number
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }

  clouds: {
    all: number
  }
}

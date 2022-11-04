import { ICurrentWeatherData } from "types/ICurrentWeatherData"
import { IData } from "types/IData"
import { helperKelvinToCelsius } from "./helperKelvinToCelsius"

export function helperCurrentWeatherResponseToData(
  data: ICurrentWeatherData,
): IData {
  return {
    weather: {
      id: data.weather[0].id,
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    },
    city: data.name,
    temperature: {
      temp: helperKelvinToCelsius(data.main.temp),
      feelsLike: helperKelvinToCelsius(data.main.feels_like),
      tempMin: helperKelvinToCelsius(data.main.temp_min),
      tempMax: helperKelvinToCelsius(data.main.temp_max),
    },
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    visibility: data.visibility,
    wind: {
      speed: data.wind.speed,
      deg: data.wind.deg,
      gust: data.wind.gust,
    },
    clouds: {
      all: data.clouds.all,
    },
  }
}

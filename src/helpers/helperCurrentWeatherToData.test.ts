import { ICurrentWeatherData } from "types/ICurrentWeatherData"
import { helperCurrentWeatherResponseToData } from "./helperCurrentWeatherToData"

const data: ICurrentWeatherData = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 501,
      main: "Rain",
      description: "moderate rain",
      icon: "10d",
    },
  ],
  base: "stations",
  main: {
    temp: 273.15,
    feels_like: 273.15,
    temp_min: 273.15,
    temp_max: 273.15,
    pressure: 1015,
    humidity: 64,
    sea_level: 1015,
    grnd_level: 933,
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18,
  },
  clouds: {
    all: 100,
  },
  dt: 1661870592,
  sys: {
    type: 2,
    id: 2075663,
    country: "IT",
    sunrise: 1661834187,
    sunset: 1661882248,
  },
  timezone: 7200,
  id: 3163858,
  name: "Zocca",
  cod: 200,
}

describe("helperCurrentWeatherToData", () => {
  it("should map CurrentWeather object to Data", () => {
    expect(helperCurrentWeatherResponseToData(data)).toMatchObject({
      weather: {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
      city: "Zocca",
      temperature: {
        temp: 0,
        feelsLike: 0,
        tempMin: 0,
        tempMax: 0,
      },
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      visibility: data.visibility,
      wind: data.wind,
      clouds: data.clouds,
    })
  })
})

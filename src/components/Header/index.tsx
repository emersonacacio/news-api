import { TemperatureBox } from "components/TemperatureBox"
import { WeatherBox } from "components/WeatherBox"
import { IWeatherData } from "types/IWeatherData"
import * as S from "./styles"

export type HeaderProps = {
  weather: IWeatherData
  temperature: number
  feelsLike: number
  city: string
}

export const Header = ({
  weather,
  temperature,
  feelsLike,
  city,
}: HeaderProps) => (
  <S.WrapperHeader>
    <WeatherBox
      title={weather.main}
      weatherIcon={weather.icon}
      description={weather.description}
      city={city}
    />
    <TemperatureBox temperature={temperature} feelsLike={feelsLike} />
  </S.WrapperHeader>
)

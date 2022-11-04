import { ReactElement } from "react"
import * as S from "./styles"

export type WeatherDataProps = {
  title: string
  icon: ReactElement
  data: string
}

export const WeatherData = ({ title, icon, data }: WeatherDataProps) => (
  <S.WrapperWeatherData title={title}>
    {icon}
    <S.DataBox>{data}</S.DataBox>
  </S.WrapperWeatherData>
)

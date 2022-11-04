import CountUp from "react-countup"

import * as S from "./styles"

export type TemperatureBoxProps = {
  temperature: number
  feelsLike: number
}

export const TemperatureBox = ({
  temperature,
  feelsLike,
}: TemperatureBoxProps) => (
  <S.WrapperTemperatureBox>
    <S.Temperature>
      <CountUp end={Math.round(temperature)} duration={1} />
      °C
    </S.Temperature>
    <S.FeelsLike>Sensação termica {Math.round(feelsLike)} °C</S.FeelsLike>
  </S.WrapperTemperatureBox>
)

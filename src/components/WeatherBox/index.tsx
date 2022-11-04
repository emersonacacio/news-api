import * as S from "./styles"

export type WeatherBoxProps = {
  title: string
  weatherIcon: string
  description: string
  city: string
}

export const WeatherBox = ({
  title,
  weatherIcon,
  city,
  description,
}: WeatherBoxProps) => (
  <S.WrapperWeatherBox>
    <S.WeatherImg
      src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
      alt={title}
    />
    <S.DataWrapper>
      <S.City>{city}</S.City>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.DataWrapper>
  </S.WrapperWeatherBox>
)

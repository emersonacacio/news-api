import { ChangeEventHandler, MouseEventHandler, useState } from "react"
import { ThermometerHalf, Droplet, Speedometer } from "@styled-icons/bootstrap"
import { Visibility } from "@styled-icons/material"
import { Wind } from "@styled-icons/boxicons-regular"
import { DotLoader } from "react-spinners"
import { Header } from "components/Header"
import { WeatherData } from "components/WeatherData"
import { useWeatherData } from "hooks/useWeatherData"

import { Input } from "components/Input"
import { Button } from "components/Button"
import * as S from "./styles"

function Home(): JSX.Element {
  const [city, setCity] = useState("Brasília")
  const [currentCity, setCurrentCity] = useState("Brasília")
  const { currentWeatherData, loading, isError, isNotFound } =
    useWeatherData(city)

  const tempMin = Math.round(currentWeatherData.temperature.tempMin)
  const tempMax = Math.round(currentWeatherData.temperature.tempMax)

  const handleChangeCity: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setCurrentCity(value)
  }

  const handleClickSearch: MouseEventHandler<HTMLButtonElement> = () => {
    setCity(currentCity)
  }

  if (isError) {
    return (
      <S.ErrorMessageWrapper>
        Ocorreu um erro! Tente novamente mais tarde!
      </S.ErrorMessageWrapper>
    )
  }
  return (
    <S.Wrapper>
      <S.InputArea>
        <Input
          placeholder="Deigite o nome da cidade"
          onChange={handleChangeCity}
          value={currentCity}
        />
        <Button onClick={handleClickSearch}>Pesquisar</Button>
      </S.InputArea>

      {loading && (
        <S.LoaderWrapper>
          <DotLoader color="rgb(53, 98, 221)" size={80} />
        </S.LoaderWrapper>
      )}
      {isNotFound ? (
        <S.ErrorMessageWrapper>
          A cidade pesquisada não foi encontrada :(
        </S.ErrorMessageWrapper>
      ) : (
        <S.WeatherWrapper>
          <Header
            weather={currentWeatherData.weather}
            temperature={currentWeatherData.temperature.temp}
            feelsLike={currentWeatherData.temperature.feelsLike}
            city={currentWeatherData.city}
          />
          <S.Hr />
          <WeatherData
            icon={<ThermometerHalf />}
            data={`${tempMin}°C - ${tempMax}°C`}
            title="Temperatura"
          />

          <WeatherData
            icon={<Droplet />}
            data={`${currentWeatherData.humidity} %`}
            title="Umidade"
          />
          <WeatherData
            icon={<Visibility />}
            data={`${currentWeatherData.visibility / 1000} km`}
            title="Visibilidade"
          />
          <WeatherData
            icon={<Speedometer />}
            data={`${currentWeatherData.pressure} hPa`}
            title="Pressão atmosférica"
          />
          <WeatherData
            icon={<Wind />}
            data={`${currentWeatherData.wind.speed} m/s para ${currentWeatherData.wind.deg}°`}
            title="Vento"
          />
        </S.WeatherWrapper>
      )}
    </S.Wrapper>
  )
}

export default Home

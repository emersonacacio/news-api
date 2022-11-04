import { getCurrentWeatherData } from "api/services"
import { AxiosError } from "axios"
import { helperCurrentWeatherResponseToData } from "helpers/helperCurrentWeatherToData"
import { useEffect, useState } from "react"
import { IData } from "types/IData"

interface IUseCurrentWeatherResponse {
  currentWeatherData: IData
  isError: boolean
  loading: boolean
  isNotFound: boolean
}

export const initialState: IData = {
  weather: {
    id: 0,
    main: "",
    description: "",
    icon: "",
  },
  city: "",
  temperature: {
    temp: 0,
    feelsLike: 0,
    tempMin: 0,
    tempMax: 0,
  },
  pressure: 0,
  humidity: 0,
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  clouds: {
    all: 0,
  },
}

export function useWeatherData(city: string): IUseCurrentWeatherResponse {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<IData>(initialState)
  const [isError, setIsError] = useState(false)
  const [isNotFound, setIsNotFound] = useState(false)
  const [loading, setLoading] = useState(false)

  useState<IData>()
  useEffect(() => {
    async function getData() {
      setLoading(true)
      setIsNotFound(false)
      try {
        const data = await getCurrentWeatherData(city)
        setCurrentWeatherData(helperCurrentWeatherResponseToData(data))

        setIsError(false)
      } catch (error) {
        if ((error as AxiosError).response?.status === 404) {
          setIsNotFound(true)
        } else {
          setIsError(true)
          console.log((error as AxiosError).response?.status)
          console.error(error)
        }
      }
      setLoading(false)
    }
    getData()
  }, [city])
  return { currentWeatherData, isError, loading, isNotFound }
}

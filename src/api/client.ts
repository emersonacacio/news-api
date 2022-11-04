import axios from "axios"

const axiosConfig = {
  baseURL: "https://api.openweathermap.org/data/2.5",
  timeout: 30000,
}

export const client = axios.create(axiosConfig)

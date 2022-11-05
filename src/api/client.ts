import axios from "axios"

const axiosConfig = {
  baseURL: "https://newsapi.org/v2",
  timeout: 30000,
}

export const client = axios.create(axiosConfig)

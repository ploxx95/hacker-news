import axios from "axios"
import { getApiUrl } from "../config"

interface ApiProps {
  framew?: string,
  page?: string
}

export const getDataApi = ({ framew, page }: ApiProps) => {
  const apiUrl = getApiUrl(framew, page)
  return axios.get(apiUrl).then(res => res.data)
}
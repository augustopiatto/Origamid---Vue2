import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
})

export const api = {
  get(url) {
    return axiosInstance.get(url)
  }
}

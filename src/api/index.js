import axios from 'axios'

const api = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_API_URL}`,
  timeout: 30000
})

api.interceptors.response.use((res) => res.data)

export { api };
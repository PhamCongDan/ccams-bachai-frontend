import api from 'axios'

api.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000
})

api.interceptors.response.use((res) => res.data)

export default api;
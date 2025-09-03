// import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8080/'
// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : ''
//   config.headers.Authorization = token ? `Bearer ${token}` : ''
//   return config
// })
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : ''

  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  } else if (config?.headers?.Authorization) {
    delete config.headers.Authorization
  }
  return config
})

export default api

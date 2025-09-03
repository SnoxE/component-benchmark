import { defineStore } from 'pinia'
import router from '@/router'
import api from '@/api/axios.js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '',
    role: localStorage.getItem('role') ? JSON.parse(localStorage.getItem('role')) : null,
    returnUrl: '/',
  }),

  getters: {
    isLoggedIn: (state) => Boolean(state.token),
  },

  actions: {
    async login(email, password) {
      const { data, status } = await api.post('api/token', { email, password })
      if (status === 200) {
        const token = data.token
        localStorage.setItem('user', JSON.stringify(email))
        localStorage.setItem('token', JSON.stringify(token))
        this.user = email
        this.token = token

        await this.fetchUser()
        router.push(this.returnUrl || '/')
      }
    },

    async fetchUser() {
      const { data, status } = await api.get('api/users/user')
      if (status === 200) {
        const role = data.role
        localStorage.setItem('role', JSON.stringify(role))
        this.role = role
      }
    },

    logout() {
      this.user = null
      this.token = ''
      this.role = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('role')
    },
  },
})

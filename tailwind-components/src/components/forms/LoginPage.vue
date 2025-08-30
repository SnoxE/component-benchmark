<template>
  <div class="h-screen w-full flex flex-col md:flex-row">
    <div class="2xl:w-3/4 xl:w-2/3 lg:w-3/5 md:w-1/2 h-1/5 xs:h-1/4 sm:h-1/3 md:h-full relative">
      <img
        src="@/assets/images/login/senna_runway_cropped-1750.webp"
        alt="Login background"
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="2xl:w-1/4 xl:w-/3 lg:w-2/5 md:w-1/2 w-full flex flex-col justify-center px-8 py-10 bg-white"
    >
      <div class="flex items-center mb-6">
        <router-link
          to="/"
          class="self-center text-primary-orange text-heading text-2xl text-semibold"
        >
          DG Detailing
        </router-link>
      </div>

      <h2 class="text-lg sm:text-2xl mb-6 text-title">Dobrze Cię znowu widzieć!</h2>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="text-sm font-medium text-dark-gray block mb-1 pl-4">Login</label>
          <input
            type="text"
            v-model="email"
            placeholder="Email"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-orange"
          />
        </div>

        <div>
          <label class="text-sm font-medium text-dark-gray block mb-1 pl-4">Hasło</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Hasło"
              class="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-orange"
            />
            <button
              type="button"
              class="absolute right-2 top-2.5 text-gray-500"
              @click="togglePassword"
            >
              <svg
                v-if="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M4.03 3.97a.75.75 0 10-1.06 1.06l1.27 1.27A9.974 9.974 0 001 12c.73 2.89 4 7 9 7 1.9 0 3.63-.7 5.03-1.85l1.94 1.94a.75.75 0 001.06-1.06l-14-14z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center space-x-2">
            <input type="checkbox" v-model="remember" class="rounded" />
            <span>Zapamiętaj mnie</span>
          </label>
          <a href="#" class="text-primary-orange hover:underline">Nie pamiętasz hasła?</a>
        </div>

        <p v-if="errorMsg" class="text-sm text-red-600 px-1 mt-2">
          {{ errorMsg }}
        </p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-primary-orange text-white py-2 rounded-md transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          Zaloguj się
        </button>

        <div class="flex items-center my-4">
          <div class="flex-grow h-px bg-gray-300"></div>
          <span class="mx-2 text-sm text-gray-500">lub</span>
          <div class="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          type="button"
          class="w-full bg-gray-900 text-white py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-black cursor-pointer"
        >
          <svg class="w-5 h-5" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.4-5.9 7.5-11.3 7.5A12 12 0 1124 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.6 6.4 29.1 4 24 4a20 20 0 100 40c10.7 0 20-8.3 20-20 0-1.3-.1-2.6-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.1l6.6 4.8A12 12 0 0124 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.6 6.4 29.1 4 24 4a20 20 0 00-17.7 10.1z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.1 0 9.8-2 13.2-5.2l-6.1-5.1A11.9 11.9 0 0124 36a12 12 0 01-11.3-7.5l-6.6 5.1C8.7 39.8 15.9 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3a12.1 12.1 0 01-4.2 5.7l6.1 5.1C39.5 35.2 44 28.7 44 24c0-1.3-.1-2.6-.4-3.5z"
            />
          </svg>
          <span>Zaloguj się z Google</span>
        </button>
      </form>

      <p class="text-center text-sm mt-6">
        Nie masz jeszcze konta?
        <router-link to="/register" class="text-primary-orange hover:underline"
          >Zarejestruj się</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const remember = ref(false)
const showPassword = ref(false)

const auth = useAuthStore()

const loading = ref(false)
const errorMsg = ref('')

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = async () => {
  console.log({ email: email.value, password: password.value, remember: remember.value })
  errorMsg.value = ''
  loading.value = true

  try {
    await auth.login(email.value, password.value)
  } finally {
    loading.value = false
  }
}
</script>

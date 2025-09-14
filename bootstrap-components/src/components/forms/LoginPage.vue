<template>
  <div class="container-fluid p-0">
    <div class="row g-0 min-vh-100">
      <div class="col-12 col-md-7 p-0">
        <img
          src="@/assets/images/login/senna_runway_cropped-1750.webp"
          alt="Login background"
          class="w-100 h-100 object-fit-cover"
        />
      </div>

      <div class="col-12 col-md-5 d-flex flex-column justify-content-center p-4 p-sm-5 bg-white">
        <div class="mb-4">
          <router-link to="/" class="text-primary fs-3 fw-medium text-decoration-none">
            DG Detailing
          </router-link>
        </div>

        <h2 class="text-title fs-4 fs-sm-1 mb-4">Dobrze Cię znowu widzieć!</h2>

        <form @submit.prevent="handleSubmit" class="d-flex flex-column gap-3">
          <div class="form-group">
            <label class="form-label ms-2 text-title">Login</label>
            <input
              type="text"
              v-model="email"
              placeholder="Email"
              class="form-control bg-white"
              style="
                color: #575757;
                border-color: #575757;
                padding-top: 0.6rem;
                padding-bottom: 0.6rem;
              "
            />
          </div>

          <div class="form-group">
            <label class="form-label ms-2 text-title">Hasło</label>
            <div class="position-relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Hasło"
                class="form-control bg-white pe-5"
                style="
                  color: #575757;
                  border-color: #575757;
                  padding-top: 0.6rem;
                  padding-bottom: 0.6rem;
                "
              />
              <button
                type="button"
                class="btn position-absolute end-0 top-50 translate-middle-y pe-3"
                @click="togglePassword"
              >
                <svg
                  v-if="!showPassword"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                  />
                  <path
                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-eye-slash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486z"
                  />
                  <path
                    d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"
                  />
                  <path
                    d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check">
              <input
                type="checkbox"
                v-model="remember"
                class="form-check-input"
                id="remember"
                style="background-color: #fff; border-color: #575757"
              />
              <label class="form-check-label" for="remember" style="color: #575757"
                >Zapamiętaj mnie</label
              >
            </div>
            <a href="#" class="text-primary text-decoration-none">Nie pamiętasz hasła?</a>
          </div>

          <p v-if="errorMsg" class="text-danger small mt-2">
            {{ errorMsg }}
          </p>
          <button type="submit" :disabled="loading" class="btn btn-primary w-100 py-2">
            Zaloguj się
          </button>

          <div class="d-flex align-items-center my-3 text-secondary">
            <hr class="flex-grow-1" />
            <span class="px-3 small">lub</span>
            <hr class="flex-grow-1" />
          </div>

          <button
            type="button"
            class="btn btn-dark w-100 py-2 d-flex align-items-center justify-content-center gap-2"
          >
            <svg class="bi" width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
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

        <p class="text-center small mt-4 text-title">
          Nie masz jeszcze konta?
          <router-link to="/register" class="text-primary text-decoration-none">
            Zarejestruj się
          </router-link>
        </p>
      </div>
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

<style scoped>
:root {
  --bs-primary: #ff6b00;
}

.form-control {
  background-color: #fff !important;
  color: #000000 !important;
  border-color: #575757 !important;
  padding-top: 0.6rem !important;
  padding-bottom: 0.6rem !important;
}

.form-check-input {
  background-color: #fff !important;
  border-color: #575757 !important;
}

.form-check-label {
  color: #575757 !important;
}

.form-control:focus {
  border-color: #ff6b00;
}

.btn-primary {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.btn-primary:hover {
  background-color: #e66000;
  border-color: #e66000;
}

.text-primary {
  color: var(--bs-primary) !important;
}

.text-title {
  color: #141414;
}

.text-secondary {
  color: #a5a5a5;
}
</style>

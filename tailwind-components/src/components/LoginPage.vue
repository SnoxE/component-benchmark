<template>
  <div class="mx-auto">
    <div class="flex">
      <div class="max-h-screen bg-primary-orange w-4/5">
        <img src="@/assets/images/login/senna_runway_cropped.jpg" alt="Car Image" class="w-full" />
      </div>
      <div class="flex flex-col bg-background w-1/5 p-6 mt-24">
        <router-link to="/" class="text-primary-orange text-heading text-2xl font-semibold pb-10">
          DG Detailing
        </router-link>
        <h3 class="font-semibold pb-6">Witaj ponownie!</h3>
        <form @submit.prevent="handleSubmit">
          <div class="">
            <label class="text-sm font-medium text-gray-700 block pb-1 pl-4">Login</label>
            <input
              type="text"
              v-model="email"
              placeholder="Email or phone number"
              class="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-orange"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const remember = ref(false)
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = () => {
  console.log({
    email: email.value,
    password: password.value,
    remember: remember.value,
  })
}
</script>

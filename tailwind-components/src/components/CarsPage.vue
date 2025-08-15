<template>
  <div class="container mx-auto max-w-screen-xl pt-24 justify-center">
    <SectionHeading>
      <template #title>SAMOCHODY</template>
      <template #description>Twoje zapisane samochody</template>
    </SectionHeading>

    <div class="flex flex-col gap-6 items-center">
      <div
        v-for="car in carList"
        :key="car.id"
        class="flex max-w-screen-md w-full rounded-xl text-title justify-between bg-light-gray-text py-4 pl-16 pr-8"
      >
        <div class="pr-4">
          <div class="body-text-md">
            {{ car.make }}
          </div>
          <div class="body-text-sm font-semibold">
            {{ car.model }}
          </div>
        </div>
        <div class="my-auto">
          {{ car.production_year }}
        </div>
        <div class="my-auto">
          {{ titleCase(car.colour.toLowerCase()) }}
        </div>
        <button
          class="my-auto hover:border-1 hover:border-primary-orange rounded-sm cursor-pointer"
          @click="deleteCar(car.id)"
        >
          <img src="@/assets/images/icons/close.svg" alt="close" />
        </button>
      </div>
      <router-link
        to="/user/dodaj-samochod"
        class="rounded-md border p-2 px-10 text-title hover:border-primary-orange"
      >
        Dodaj samochód
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api/axios.js'
import SectionHeading from '@/components/SectionHeading.vue'

// State
const items = ref([
  { id: 1, label: 'Option 1', value: 'option1' },
  { id: 2, label: 'Option 2', value: 'option2' },
  { id: 3, label: 'Option 3', value: 'option3' },
])
const carList = ref([])
const selectedItems = ref([])
const userId = ref('')

// Fetch functions
const fetchUserId = async () => {
  const response = await api.get('api/users/user')
  userId.value = response.data['id']
  console.log(response)
}

const fetchUserCars = async () => {
  const response = await api.get(`api/users/${userId.value}/cars`)
  const list = response.data['content'] || []
  carList.value.push(...list)
}

const deleteCar = async (carId) => {
  const response = await api.delete(`api/users/${userId.value}/delete-car/${carId}`)
  if (response.status === 200) {
    carList.value.length = 0
    await fetchUserCars()
  }
}

const titleCase = (input) => {
  return input
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

onMounted(async () => {
  await fetchUserId()
  await fetchUserCars()
})
</script>

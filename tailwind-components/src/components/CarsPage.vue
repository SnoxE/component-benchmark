<template>
  <div class="container mx-auto max-w-screen-xl pt-24 justify-center">
    <SectionHeading>
      <template #title>SAMOCHODY</template>
      <template #description>Twoje zapisane samochody</template>
    </SectionHeading>

    <div class="flex flex-col gap-6 items-center px-2">
      <div
        v-for="car in carList"
        :key="car.id"
        class="max-w-screen-md w-full rounded-xl bg-light-gray-text text-title py-4 pl-12 pr-8 grid grid-cols-[minmax(0,1fr)_110px_24px] gap-x-4 gap-y-1 sm:items-center sm:gap-x-6 sm:grid-cols-[minmax(0,1fr)_100px_140px_24px]"
      >
        <div class="pr-2 sm:min-w-0">
          <div class="body-text-md sm:truncate" :title="car.make">
            {{ car.make }}
          </div>
          <div class="body-text-sm font-semibold sm:truncate" :title="car.model">
            {{ car.model }}
          </div>
        </div>

        <div class="col-start-2 row-span-2 flex flex-col gap-0.5 sm:contents">
          <div
            class="my-auto sm:body-text-md sm:whitespace-nowrap sm:text-center sm:w-[130px] sm:col-auto sm:row-auto"
          >
            {{ car.production_year }}
          </div>

          <div
            class="my-auto sm:text-center sm:w-[200px] sm:truncate sm:col-auto sm:row-auto"
            :title="titleCase(car.colour.toLowerCase())"
          >
            {{ titleCase(car.colour.toLowerCase()) }}
          </div>
        </div>

        <button
          class="hover:border-1 hover:border-primary-orange rounded-sm cursor-pointer col-start-3 row-span-2 self-center justify-self-end sm:col-start-auto sm:row-span-1 sm:self-auto"
          @click="deleteCar(car.id)"
          aria-label="Usuń samochód"
        >
          <img src="@/assets/images/icons/close.svg" alt="close" />
        </button>
      </div>

      <router-link
        to="/user/add-car"
        class="rounded-md border p-2 px-10 text-title border-primary-orange hover:bg-primary-orange hover:text-white"
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

const carList = ref([])
const userId = ref('')

const fetchUserId = async () => {
  const response = await api.get('api/users/user')
  userId.value = response.data['id']
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

const titleCase = (input) =>
  input
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

onMounted(async () => {
  await fetchUserId()
  await fetchUserCars()
})
</script>

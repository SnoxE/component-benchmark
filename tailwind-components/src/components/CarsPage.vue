<template>
  <div class="container mx-auto max-w-screen-xl pt-24 justify-center">
    <SectionHeading>
      <template #title>SAMOCHODY</template>
      <template #description>Twoje zapisane samochody</template>
    </SectionHeading>

    <div class="flex flex-col gap-6 items-center px-2">
      <!-- <div
        v-for="car in carList"
        :key="car.id"
        class="flex max-w-screen-md w-full rounded-xl text-title justify-between bg-light-gray-text py-4 pl-12 pr-8"
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
      </div> -->
      <div
        v-for="car in carList"
        :key="car.id"
        class="max-w-screen-md w-full rounded-xl bg-light-gray-text text-title py-4 pl-12 pr-8 flex items-center justify-between gap-4 sm:grid sm:items-center sm:gap-x-6 sm:grid-cols-[minmax(0,1fr)_100px_140px_24px]"
      >
        <!-- Marka / model -->
        <!-- MOBILE: bez truncate, tak jak wcześniej.
       DESKTOP: w gridzie włączamy min-w-0 + truncate, żeby nie rozpychało. -->
        <div class="pr-4 sm:min-w-0">
          <div class="body-text-md sm:truncate" :title="car.make">
            {{ car.make }}
          </div>
          <div class="body-text-sm font-semibold sm:truncate" :title="car.model">
            {{ car.model }}
          </div>
        </div>

        <!-- Rok -->
        <!-- MOBILE: zwykły tekst (bez sztywnej szerokości).
       DESKTOP: stała kolumna, cyfry mono-szerokości i wyśrodkowanie. -->
        <div
          class="my-auto sm:body-text-md sm:whitespace-nowrap sm:tabular-nums sm:text-center sm:w-[140px]"
        >
          {{ car.production_year }}
        </div>

        <!-- Kolor -->
        <!-- MOBILE: zwykły tekst po prawej (bez truncate).
       DESKTOP: stała kolumna, opcjonalny truncate. -->
        <div
          class="my-auto sm:text-center sm:w-[200px] sm:truncate"
          :title="titleCase(car.colour.toLowerCase())"
        >
          {{ titleCase(car.colour.toLowerCase()) }}
        </div>

        <!-- X -->
        <button
          class="my-auto sm:justify-self-end hover:border-1 hover:border-primary-orange rounded-sm cursor-pointer"
          @click="deleteCar(car.id)"
          aria-label="Usuń samochód"
        >
          <img src="@/assets/images/icons/close.svg" alt="close" />
        </button>
      </div>

      <!--  -->
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

// State
const carList = ref([])
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

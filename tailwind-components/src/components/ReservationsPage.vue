<template>
  <div class="container mx-auto max-w-screen-xl pt-24 justify-center">
    <SectionHeading>
      <template #title>REZERWACJE</template>
      <template #description>Twoje rezerwacje</template>
    </SectionHeading>

    <!-- <div class="flex flex-col gap-6 items-center pb-12 px-2">
      <div
        v-for="order in orderList"
        :key="order.res_id"
        class="grid max-w-screen-md w-full rounded-xl text-title items-center bg-light-gray-text py-4 pl-12 pr-8 gap-y-4 mb-4 mx-4 mobile: margin-x 1rem sm:mx-0 sm:mb-0 sm:gap-x-8 sm:grid-cols-[minmax(0,1fr)_220px_64px_32px]"
      >
        <div class="flex flex-col">
          <div class="sm:body-text-lg font-semibold">
            {{ order.services_name }}
          </div>
          <div class="">
            <span class="text-md">{{ order.cars_make }} </span>
            <span class="text-md font-semibold pl-1">{{ order.cars_model }}</span>
          </div>
        </div>

        <div class="flex flex-col text-left">
          <span class="body-text-md">
            {{ formatReservationDate(order.res_start_at).weekday }},
          </span>
          <span>
            {{ formatReservationDate(order.res_start_at).day }}
            {{ formatReservationDate(order.res_start_at).month }}
            {{ formatReservationDate(order.res_start_at).year }}
          </span>
          <span class="body-text-sm">
            {{ extractDateAndTime(order.res_start_at).time }} -
            {{ extractDateAndTime(order.res_end_at).time }}
          </span>
        </div>
        <div class="flex items-center justify-end whitespace-nowrap">
          <span class="body-text-md-medium">{{ order.services_price }}</span>
          <span class="body-text-md pl-1">PLN</span>
        </div>

        <button
          class="hover:border-1 hover:border-primary-orange rounded-sm cursor-pointer"
          @click="deleteReservation(order.res_id)"
        >
          <img src="@/assets/images/icons/close.svg" alt="close" />
        </button>
      </div>
    </div> -->
    <div class="flex flex-col gap-6 items-center pb-12 px-2">
      <div
        v-for="order in orderList"
        :key="order.res_id"
        class="relative max-w-screen-md w-full rounded-xl text-title bg-light-gray-text py-4 pl-12 pr-8 mx-4 sm:mx-0 sm:grid sm:items-center sm:gap-x-8 sm:grid-cols-[minmax(0,1fr)_220px_64px_32px]"
      >
        <button
          class="absolute top-3 right-3 sm:hidden hover:border-1 hover:border-primary-orange rounded-sm cursor-pointer"
          @click="deleteReservation(order.res_id)"
          aria-label="Usuń rezerwację"
        >
          <img src="@/assets/images/icons/close.svg" alt="close" />
        </button>

        <div>
          <div class="sm:body-text-lg font-semibold">
            {{ order.services_name }}
          </div>
          <div>
            <span class="text-md">{{ order.cars_make }}</span>
            <span class="text-md font-semibold pl-1">{{ order.cars_model }}</span>
          </div>
        </div>

        <div class="mt-3 flex items-center justify-between sm:hidden">
          <div class="text-left">
            <div class="body-text-md">
              {{ formatReservationDate(order.res_start_at).weekday }},
              {{ formatReservationDate(order.res_start_at).day }}
              {{ formatReservationDate(order.res_start_at).month }}
              {{ formatReservationDate(order.res_start_at).year }}
            </div>
            <div class="body-text-sm">
              {{ extractDateAndTime(order.res_start_at).time }} –
              {{ extractDateAndTime(order.res_end_at).time }}
            </div>
          </div>
          <div class="flex items-center whitespace-nowrap pl-4">
            <span class="body-text-md-medium">{{ order.services_price }}</span>
            <span class="body-text-md pl-1">PLN</span>
          </div>
        </div>

        <div class="hidden sm:flex sm:flex-col text-left">
          <span class="body-text-md">
            {{ formatReservationDate(order.res_start_at).weekday }},
          </span>
          <span>
            {{ formatReservationDate(order.res_start_at).day }}
            {{ formatReservationDate(order.res_start_at).month }}
            {{ formatReservationDate(order.res_start_at).year }}
          </span>
          <span class="body-text-sm">
            {{ extractDateAndTime(order.res_start_at).time }} –
            {{ extractDateAndTime(order.res_end_at).time }}
          </span>
        </div>

        <div class="hidden sm:flex items-center justify-end whitespace-nowrap">
          <span class="body-text-md-medium">{{ order.services_price }}</span>
          <span class="body-text-md pl-1">PLN</span>
        </div>

        <button
          class="hidden sm:block justify-self-end hover:border-1 hover:border-primary-orange rounded-sm cursor-pointer"
          @click="deleteReservation(order.res_id)"
          aria-label="Usuń rezerwację"
        >
          <img src="@/assets/images/icons/close.svg" alt="close" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api/axios'
import SectionHeading from './SectionHeading.vue'

const orderList = ref([])
const userId = ref('')

const fetchOrders = async () => {
  const { data } = await api.get(`api/users/${userId.value}/reservations`)
  const reservationList = data?.content || []
  orderList.value = reservationList
  console.log(reservationList)
}

const fetchUserId = async () => {
  const { data } = await api.get('api/users/user')
  userId.value = data?.id || ''
}

// const fetchUserCars = async () => {
//   const { data } = await api.get(`api/users/${userId.value}/cars`)
//   console.log(data?.content)
// }

const extractDateAndTime = (timestamp) => {
  const dateObj = new Date(timestamp)
  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const day = String(dateObj.getDate()).padStart(2, '0')
  const hours = String(dateObj.getHours()).padStart(2, '0')
  const minutes = String(dateObj.getMinutes()).padStart(2, '0')
  return { date: `${year}-${month}-${day}`, time: `${hours}h${minutes}` }
}

onMounted(async () => {
  await fetchUserId()
  await fetchOrders()
})

function formatReservationDate(timestamp) {
  const dateObj = new Date(timestamp)
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  const day = dateObj.getDate()
  const month = dateObj.toLocaleString('pl-PL', { month: 'long' })
  const weekday = dateObj.toLocaleString('pl-PL', { weekday: 'long' })
  const year = dateObj.getFullYear()

  return {
    weekday: `${capitalize(weekday)}`,
    day: `${day}`,
    month: `${capitalize(month)}`,
    year: `${year}`,
  }
}
</script>

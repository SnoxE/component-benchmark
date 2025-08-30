<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <SectionHeading>
        <template #title>REZERWACJE</template>
        <template #description>Zarezerwuj termin</template>
      </SectionHeading>
    </div>

    <div class="mx-auto w-full max-w-md rounded-lg border border-gray-200 bg-white shadow-md">
      <form class="p-6" @submit.prevent="addReservation">
        <label for="service-selector" class="mb-1 block text-sm font-medium text-gray-700">
          Wybierz usługę
        </label>
        <div class="relative w-full">
          <select
            id="service-selector"
            v-model="selectedService"
            name="service-selector"
            class="mb-4 w-full rounded-md border border-gray-300 px-3 pr-12 py-2 text-gray-900 bg-white focus:border-primary-orange focus:outline-none focus:ring-1 focus:ring-primary-orange appearance-none"
            @blur="serviceTouched = true"
          >
            <option v-for="service in services" :key="service.id" :value="service">
              {{ service.name }}
            </option>
          </select>
          <span class="pointer-events-none absolute top-1/2 -translate-y-[14px] right-3">
            <svg
              class="h-4 w-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        <p v-if="serviceError" class="mt-[-6px] mb-3 text-xs text-red-500">Wybierz usługę.</p>

        <label for="time-selector" class="mb-1 block text-sm font-medium text-gray-700">
          Wybierz samochód
        </label>
        <div class="relative w-full">
          <select
            id="car-selector"
            v-model="selectedCar"
            name="car-selector"
            class="mb-4 w-full rounded-md border border-gray-300 px-3 pr-12 py-2 text-gray-900 bg-white focus:border-primary-orange focus:outline-none focus:ring-1 focus:ring-primary-orange appearance-none"
            @blur="carTouched = true"
          >
            <option v-for="car in carList" :key="car.id" :value="car">
              {{ car.production_year }} {{ car.make }} {{ car.model }}
            </option>
          </select>
          <span class="pointer-events-none absolute top-1/2 -translate-y-[14px] right-3">
            <svg
              class="h-4 w-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        <p v-if="carError" class="mt-[-6px] mb-3 text-xs text-red-500">Wybierz samochód.</p>

        <label for="date-picker" class="mb-1 block text-sm font-medium text-gray-700">
          Wybierz datę
        </label>
        <VueDatePicker
          id="date-picker"
          v-model="selectedDate"
          name="date-picker"
          :enable-time-picker="false"
          :min-date="new Date()"
          auto-apply
          class="mb-4 w-full rounded-md focus:border-primary-orange focus:ring-1 focus:ring-primary-orange"
          @blur="dateTouched = true"
        />
        <p v-if="dateError" class="mt-[-6px] mb-3 text-xs text-red-500">Wybierz datę.</p>

        <label for="time-selector" class="mb-1 block text-sm font-medium text-gray-700">
          Wybierz godzinę
        </label>
        <div class="relative w-full">
          <select
            id="time-selector"
            v-model="selectedTime"
            name="time-selector"
            class="mb-1 w-full rounded-md border border-gray-300 px-3 pr-12 py-2 text-gray-900 bg-white focus:border-primary-orange focus:outline-none focus:ring-1 focus:ring-primary-orange appearance-none"
            @blur="timeTouched = true"
          >
            <option v-for="slot in availableSlots" :key="slot" :value="slot">
              {{ slot }}
            </option>
          </select>
          <span class="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              class="h-4 w-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        <p v-if="timeError" class="mt-[-6px] mb-3 text-xs text-red-500">Wybierz godzinę.</p>

        <button
          type="submit"
          :disabled="submitting || !isFormValid"
          class="mt-6 w-full rounded-md bg-primary-orange px-4 py-2 font-medium text-white shadow disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
        >
          {{ submitting ? 'Rezerwuję…' : 'Zarezerwuj' }}
        </button>

        <!-- Success -->
        <p v-if="reservationSuccessful" class="mt-2 text-sm text-green-600">
          Rezerwacja została złożona.
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import api from '@/api/axios'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import SectionHeading from '@/components/SectionHeading.vue'

// state
const services = ref([])
const carList = ref([])
const availableSlots = ref([])
const userId = ref('')

const selectedService = ref('')
const selectedCar = ref(null)
const selectedDate = ref('')
const selectedTime = ref('')

const reservationSuccessful = ref(false)
const submitting = ref(false)

// touched flags
const serviceTouched = ref(false)
const carTouched = ref(false)
const dateTouched = ref(false)
const timeTouched = ref(false)

// validation
const serviceError = computed(() => serviceTouched.value && !selectedService.value)
const carError = computed(() => carTouched.value && !selectedCar.value)
const dateError = computed(() => dateTouched.value && !selectedDate.value)
const timeError = computed(() => timeTouched.value && !selectedTime.value)

const isFormValid = computed(
  () => selectedService.value && selectedCar.value && selectedDate.value && selectedTime.value,
)

// lifecycle
const fetchUserId = async () => {
  const response = await api.get('/api/users/user')
  userId.value = response.data.id
}

const fetchUserCars = async () => {
  const response = await api.get(`/api/users/${userId.value}/cars`)
  carList.value = response.data.content
}

const getServices = async () => {
  const response = await api.get('/api/services')
  services.value = response.data.content
}

const getServiceInfo = async () => {
  const response = await api.get(`/api/services/${selectedService.value}/${selectedCar.value.size}`)
  return response.data[0]
}

const extractTimeFromString = (time) => {
  const [hours, minutes, seconds] = time.split(':')
  return { hours, minutes, seconds }
}

const getDateFromPicker = () => {
  if (selectedDate.value) {
    const d = selectedDate.value
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
      d.getDate(),
    ).padStart(2, '0')}`
  }
  return ''
}

const getAvailableTimes = async () => {
  const serviceInfo = await getServiceInfo()
  const length = extractTimeFromString(serviceInfo.length)

  const response = await api.get('/api/reservations/daily-hours', {
    params: {
      length_hours: parseInt(length.hours),
      length_minutes: parseInt(length.minutes),
    },
  })

  availableSlots.value = response.data[getDateFromPicker()] || []
  if (availableSlots.value.length === 0) {
    availableSlots.value.push('Brak wolnych terminów')
  }
}

// watchers for slots refresh
watch([selectedService, selectedCar, selectedDate], () => {
  if (selectedService.value && selectedCar.value && selectedDate.value) {
    getAvailableTimes()
  }
})

// submit
const addReservation = async () => {
  if (!isFormValid.value) return
  submitting.value = true
  reservationSuccessful.value = false

  try {
    const serviceInfo = await getServiceInfo()
    const length = extractTimeFromString(serviceInfo.length)

    const response = await api.post(`/api/reservations/${userId.value}/add-reservation`, {
      service_id: serviceInfo.id,
      car_id: parseInt(selectedCar.value.id),
      start_at_date: getDateFromPicker(),
      start_at_time: selectedTime.value,
      length: {
        hours: parseInt(length.hours),
        minutes: parseInt(length.minutes),
      },
    })

    if (response.status === 200) {
      reservationSuccessful.value = true
      await getAvailableTimes()
    }
  } catch (err) {
    console.error('Reservation error', err)
  } finally {
    submitting.value = false
  }
}

// init
;(async () => {
  await getServices()
  await fetchUserId()
  await fetchUserCars()
})()
</script>

<style scoped>
:deep(.dp__input) {
  height: 42px;
}
</style>

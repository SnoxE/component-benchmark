<template>
  <div class="container pt-96">
    <div class="text-center mb-4">
      <SectionHeading>
        <template #title>REZERWACJE</template>
        <template #description>Zarezerwuj termin</template>
      </SectionHeading>
    </div>

    <div class="mx-auto" style="max-width: 560px">
      <div class="card shadow-sm border border-light bg-white text-dark">
        <div class="card-body">
          <form @submit.prevent="addReservation" class="d-grid gap-2">
            <label for="service-selector" class="form-label">Wybierz usługę</label>
            <select
              id="service-selector"
              v-model="selectedService"
              name="service-selector"
              class="form-select"
              @blur="serviceTouched = true"
            >
              <option v-for="service in services" :key="service.id" :value="service">
                {{ service.name }}
              </option>
            </select>
            <div v-if="serviceError" class="form-text text-danger mt-n1">Wybierz usługę.</div>

            <label for="car-selector" class="form-label mt-2">Wybierz samochód</label>
            <select
              id="car-selector"
              v-model="selectedCar"
              name="car-selector"
              class="form-select"
              @blur="carTouched = true"
            >
              <option v-for="car in carList" :key="car.id" :value="car">
                {{ car.production_year }} {{ car.make }} {{ car.model }}
              </option>
            </select>
            <div v-if="carError" class="form-text text-danger mt-n1">Wybierz samochód.</div>

            <label for="date-picker" class="form-label mt-2">Wybierz datę</label>
            <VueDatePicker
              id="date-picker"
              v-model="selectedDate"
              name="date-picker"
              :enable-time-picker="false"
              :min-date="new Date()"
              auto-apply
              class="mb-1"
              @blur="dateTouched = true"
            />
            <div v-if="dateError" class="form-text text-danger mt-n1">Wybierz datę.</div>

            <label for="time-selector" class="form-label mt-2">Wybierz godzinę</label>
            <select
              id="time-selector"
              v-model="selectedTime"
              name="time-selector"
              class="form-select"
              @blur="timeTouched = true"
            >
              <option v-for="slot in availableSlots" :key="slot" :value="slot">
                {{ slot }}
              </option>
            </select>
            <div v-if="timeError" class="form-text text-danger mt-n1">Wybierz godzinę.</div>

            <button
              type="submit"
              :disabled="submitting || !isFormValid"
              class="btn btn-primary w-100 mt-3"
            >
              {{ submitting ? 'Rezerwuję…' : 'Zarezerwuj' }}
            </button>

            <p v-if="reservationSuccessful" class="text-success small mb-0 mt-2">
              Rezerwacja została złożona.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import api from '@/api/axios'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import SectionHeading from '@/components/SectionHeading.vue'

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

const serviceTouched = ref(false)
const carTouched = ref(false)
const dateTouched = ref(false)
const timeTouched = ref(false)

const serviceError = computed(() => serviceTouched.value && !selectedService.value)
const carError = computed(() => carTouched.value && !selectedCar.value)
const dateError = computed(() => dateTouched.value && !selectedDate.value)
const timeError = computed(() => timeTouched.value && !selectedTime.value)

const isFormValid = computed(
  () => selectedService.value && selectedCar.value && selectedDate.value && selectedTime.value,
)

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
  console.log('Fetching service info for', selectedService.value.name, selectedCar.value.size)
  const response = await api.get(
    `/api/services/${selectedService.value.name}/${selectedCar.value.size}`,
  )
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

watch([selectedService, selectedCar, selectedDate], () => {
  if (selectedService.value && selectedCar.value && selectedDate.value) {
    getAvailableTimes()
  }
})

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

;(async () => {
  await getServices()
  await fetchUserId()
  await fetchUserCars()
})()
</script>

<style scoped>
.pt-96 {
  padding-top: 96px;
}

.form-control,
.form-select {
  background-color: #fff !important;
  color: #575757 !important;
  border: 1px solid #bdbdbd !important;
  padding-top: 0.65rem !important;
  padding-bottom: 0.65rem !important;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}
.form-control:focus,
.form-select:focus {
  border-color: #ff6d01 !important;
  box-shadow: 0 0 0 0.2rem rgba(249, 115, 22, 0.25) !important;
  outline: none !important;
}

:deep(.dp__input) {
  height: 42px;
  color: #575757;
  border-color: #bdbdbd;
}
:deep(.dp__input:focus) {
  border-color: #ff6d01;
  box-shadow: 0 0 0 0.2rem rgba(249, 115, 22, 0.25);
}

.btn-primary {
  color: #000000 !important;
  background: #ffff6d01 !important;
}
.btn-primary:hover {
  background: #ff6d01 !important;
  border-color: #ff6d01 !important;
  color: #ffffff !important;
}
</style>

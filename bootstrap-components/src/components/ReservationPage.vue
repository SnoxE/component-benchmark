<template>
  <div class="container pt-96">
    <div class="text-center mb-4">
      <SectionHeading>
        <template #title>REZERWACJE</template>
        <template #description>Twoje rezerwacje</template>
      </SectionHeading>
    </div>

    <div class="d-flex flex-column gap-3 align-items-center pb-5 px-2 text-title">
      <div
        v-for="order in orderList"
        :key="order.res_id"
        class="position-relative w-100 w-sm-75 w-md-100 max-w-md rounded-3 p-3 p-sm-4 reservation-card d-grid gap-2 gap-sm-3"
      >
        <button
          class="btn btn-sm position-absolute top-0 end-0 mt-2 me-2 d-md-none delete-btn"
          @click="deleteReservation(order.res_id)"
          aria-label="Usuń rezerwację"
        >
          <img src="@/assets/images/icons/close.svg" alt="close" width="16" height="16" />
        </button>

        <div class="d-none d-md-grid align-items-center reservation-grid text-title">
          <div>
            <div class="fw-semibold">{{ order.services_name }}</div>
            <div>
              <span>{{ order.cars_make }}</span>
              <span class="fw-semibold ps-1">{{ order.cars_model }}</span>
            </div>
          </div>

          <!-- date -->
          <div class="d-flex flex-column">
            <span>{{ formatReservationDate(order.res_start_at).weekday }},</span>
            <span>
              {{ formatReservationDate(order.res_start_at).day }}
              {{ formatReservationDate(order.res_start_at).month }}
              {{ formatReservationDate(order.res_start_at).year }}
            </span>
            <span class="small">
              {{ extractDateAndTime(order.res_start_at).time }} –
              {{ extractDateAndTime(order.res_end_at).time }}
            </span>
          </div>

          <!-- price -->
          <div class="text-end text-nowrap">
            <span class="fw-semibold">{{ order.services_price }}</span>
            <span class="ps-1">PLN</span>
          </div>

          <!-- desktop close -->
          <div class="text-end">
            <button
              class="btn btn-sm delete-btn"
              @click="deleteReservation(order.res_id)"
              aria-label="Usuń rezerwację"
            >
              <img src="@/assets/images/icons/close.svg" alt="close" width="16" height="16" />
            </button>
          </div>
        </div>

        <div class="d-md-none">
          <div class="fw-semibold">{{ order.services_name }}</div>
          <div>
            <span>{{ order.cars_make }}</span>
            <span class="fw-semibold ps-1">{{ order.cars_model }}</span>
          </div>

          <div class="d-flex justify-content-between align-items-start mt-2">
            <div>
              <div>
                {{ formatReservationDate(order.res_start_at).weekday }},
                {{ formatReservationDate(order.res_start_at).day }}
                {{ formatReservationDate(order.res_start_at).month }}
                {{ formatReservationDate(order.res_start_at).year }}
              </div>
              <div class="small">
                {{ extractDateAndTime(order.res_start_at).time }} –
                {{ extractDateAndTime(order.res_end_at).time }}
              </div>
            </div>

            <div class="text-nowrap ps-3">
              <span class="fw-semibold">{{ order.services_price }}</span>
              <span class="ps-1">PLN</span>
            </div>
          </div>
        </div>
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
  orderList.value = data?.content || []
}

const fetchUserId = async () => {
  const { data } = await api.get('api/users/user')
  userId.value = data?.id || ''
}

const deleteReservation = async (resId) => {
  const { status } = await api.delete(`api/users/${userId.value}/reservations/${resId}`)
  if (status === 200) await fetchOrders()
}

const extractDateAndTime = (timestamp) => {
  const d = new Date(timestamp)
  const pad = (n) => String(n).padStart(2, '0')
  return {
    date: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
    time: `${pad(d.getHours())}h${pad(d.getMinutes())}`,
  }
}

function formatReservationDate(timestamp) {
  const dateObj = new Date(timestamp)
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1)
  return {
    weekday: cap(dateObj.toLocaleString('pl-PL', { weekday: 'long' })),
    day: `${dateObj.getDate()}`,
    month: cap(dateObj.toLocaleString('pl-PL', { month: 'long' })),
    year: `${dateObj.getFullYear()}`,
  }
}

onMounted(async () => {
  await fetchUserId()
  await fetchOrders()
})
</script>

<style scoped>
.pt-96 {
  padding-top: 6rem !important;
}
.reservation-card {
  background-color: #dcdcdc !important;
  border-radius: 0.6rem;
}

@media (min-width: 768px) {
  .reservation-grid {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) 220px 80px 32px;
    column-gap: 2rem;
  }
}

.delete-btn {
  border: none;
  background: transparent;
  padding: 0.25rem 0.4rem;
  border-radius: 0.25rem;
  transition: border-color 0.2s ease;
}
.delete-btn:hover {
  border: 1px solid #ff6d01;
}

.text-title {
  color: #141414 !important;
}
</style>

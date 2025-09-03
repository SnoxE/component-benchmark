<template>
  <div class="container pt-96">
    <div class="text-center mb-5">
      <SectionHeading>
        <template #title>SAMOCHODY</template>
        <template #description>Twoje zapisane samochody</template>
      </SectionHeading>
    </div>

    <div class="d-flex flex-column gap-3 align-items-center px-2">
      <div
        v-for="car in carList"
        :key="car.id"
        class="w-100 rounded-3 px-3 px-sm-4 py-3 d-flex align-items-center justify-content-between car-card"
      >
        <div class="me-3 flex-grow-1 min-w-0">
          <div class="fw-semibold fs-5 text-black" :title="car.make">
            {{ car.make }}
          </div>
          <div class="fw-semibold fs-6 text-black" :title="car.model">
            {{ car.model }}
          </div>
        </div>

        <div class="text-nowrap mx-2 fs-6" style="min-width: 100px">
          {{ car.production_year }}
        </div>

        <div
          class="text-nowrap mx-2 fs-6"
          style="min-width: 140px; max-width: 35%"
          :title="titleCase(car.colour.toLowerCase())"
        >
          {{ titleCase(car.colour.toLowerCase()) }}
        </div>

        <button
          class="btn btn-sm ms-2 delete-btn"
          @click="deleteCar(car.id)"
          aria-label="Usuń samochód"
          title="Usuń"
        >
          <img src="@/assets/images/icons/close.svg" alt="close" width="16" height="16" />
        </button>
      </div>

      <router-link to="/user/add-car" class="btn btn-outline-primary text-black px-4 mt-3">
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
  carList.value = response.data['content'] || []
}

const deleteCar = async (carId) => {
  const response = await api.delete(`api/users/${userId.value}/delete-car/${carId}`)
  if (response.status === 200) {
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

<style scoped>
.pt-96 {
  padding-top: 6rem !important;
}

.btn:hover {
  color: #ffffff !important;
}

.car-card {
  background-color: #dcdcdc;
}

.min-w-0 {
  min-width: 0;
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
</style>

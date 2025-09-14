<template>
  <div class="container pt-96">
    <div class="text-center mb-4">
      <SectionHeading>
        <template #title>SAMOCHODY</template>
        <template #description>Twoje zapisane samochody</template>
      </SectionHeading>
    </div>

    <div class="d-flex flex-column gap-3 align-items-center px-2 text-title">
      <div v-for="car in carList" :key="car.id" class="w-100 rounded-3 p-3 p-sm-4 car-card car-row">
        <div class="me-2 min-w-0">
          <div class="fw-semibold fs-5 text-truncate" :title="car.make">{{ car.make }}</div>
          <div class="fw-semibold fs-6 text-truncate" :title="car.model">{{ car.model }}</div>
        </div>

        <div class="car-stack">
          <div class="fs-6 car-year">
            {{ car.production_year }}
          </div>

          <div class="fs-6 text-truncate car-color" :title="titleCase(car.colour.toLowerCase())">
            {{ titleCase(car.colour.toLowerCase()) }}
          </div>
        </div>

        <button
          class="btn btn-sm delete-btn ms-2"
          @click="deleteCar(car.id)"
          aria-label="Usuń samochód"
          title="Usuń"
        >
          <img src="@/assets/images/icons/close.svg" alt="close" width="16" height="16" />
        </button>
      </div>

      <router-link to="/user/add-car" class="btn add-car-btn px-4 mt-2 mb-5">
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
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

onMounted(async () => {
  await fetchUserId()
  await fetchUserCars()
})
</script>

<style scoped>
/* Card styling */
.pt-96 {
  padding-top: 6rem !important;
}

.car-card {
  background-color: #dcdcdc;
}

/* Grid layout: mobile = 3 cols; sm+ = 4 cols */
.car-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 120px 32px; /* make/model | year+color | delete */
  column-gap: 1rem;
  row-gap: 0.25rem;
  align-items: center;
}

/* On mobile: stack year + color inside the middle column */
.car-stack {
  grid-column: 2;
  display: flex; /* <-- NOT Bootstrap utility, so easy to override */
  flex-direction: column;
  gap: 0.25rem;
}

/* Delete button stays right */
.delete-btn {
  color: #141414 !important;
  grid-column: 3;
  justify-self: end;
  border: none;
  background: transparent;
  padding: 0.25rem 0.4rem;
  border-radius: 0.25rem;
  transition: border-color 0.2s ease;
}

.delete-btn:hover {
  border: 1px solid #ff6d01;
  color: #ffffff !important;
}

.add-car-btn {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid;
  border-color: #ff6d01;
  transition: all 0.2s ease;
}

.add-car-btn:hover {
  background-color: #ff6d01;
  color: #ffffff; /* white text */
  border-color: #ff6d01;
}

/* ≥576px: split year & color into two separate columns (4-col grid) */
@media (min-width: 576px) {
  .car-row {
    grid-template-columns: minmax(0, 1fr) 100px 140px 32px; /* make/model | year | color | delete */
    column-gap: 1.5rem;
  }

  /* This makes the wrapper disappear layout-wise so the children become grid items */
  .car-stack {
    display: contents !important; /* beats any .d-flex if present */
  }

  /* Place the items explicitly into the grid */
  .car-year {
    grid-column: 2;
    justify-self: center;
    white-space: nowrap;
  }
  .car-color {
    grid-column: 3;
    justify-self: center;
    white-space: nowrap;
    max-width: 200px;
  }
  .delete-btn {
    grid-column: 4;
  }
}

.text-title {
  color: #141414;
}

.text-secondary {
  color: #a5a5a5;
}
</style>

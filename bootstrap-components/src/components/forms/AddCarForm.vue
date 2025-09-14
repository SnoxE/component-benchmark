<template>
  <div class="container pb-5 pt-96">
    <!-- Heading -->
    <div class="text-center mb-4">
      <SectionHeading>
        <template #title>SAMOCHODY</template>
        <template #description>Dodaj swoje auto</template>
      </SectionHeading>
    </div>

    <!-- Card -->
    <div class="mx-auto" style="max-width: 560px">
      <div class="card shadow-sm border border-light bg-white">
        <div class="card-body">
          <form @submit.prevent="addCar" class="d-grid gap-2">
            <!-- Marka -->
            <label for="make" class="form-label text-title">Marka</label>
            <input
              id="make"
              v-model="make"
              type="text"
              placeholder="Renault"
              class="form-control"
              required
            />

            <!-- Model -->
            <label for="model" class="form-label mt-2 text-title">Model</label>
            <input
              id="model"
              v-model="model"
              type="text"
              placeholder="Clio 4"
              class="form-control"
              required
            />

            <!-- Rok produkcji -->
            <label for="production_year" class="form-label mt-2 text-title">Rok produkcji</label>
            <input
              id="production_year"
              v-model="production_year"
              type="text"
              placeholder="2014"
              class="form-control"
              :class="yearError ? 'is-invalid' : ''"
              @blur="yearTouched = true"
              required
            />
            <div v-if="yearError" class="invalid-feedback d-block">
              Podaj prawidłowy rok (1900 – {{ currentYear }}).
            </div>

            <!-- Kolor -->
            <label for="colour" class="form-label mt-2 text-title">Kolor</label>
            <input
              id="colour"
              v-model="colour"
              type="text"
              placeholder="Czarny"
              class="form-control"
              required
            />

            <!-- Rozmiar -->
            <label for="selector" class="form-label mt-2 text-title">Rozmiar</label>
            <select id="selector" v-model="size" class="form-select">
              <option v-for="carSize in sizes" :key="carSize" :value="carSize">
                {{ carSize }}
              </option>
            </select>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="submitting || !isFormValid"
              class="btn btn-primary w-100 mt-3"
            >
              {{ submitting ? 'Dodawanie…' : 'Dodaj' }}
            </button>

            <!-- Success -->
            <p v-if="wasCarAdded" class="text-success small mb-0 mt-2">
              Pomyślnie dodano samochód.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import api from '@/api/axios'
import SectionHeading from '@/components/SectionHeading.vue'

const sizes = ['Małe', 'Średnie', 'Duże']

const userId = ref('')
const make = ref('')
const model = ref('')
const production_year = ref('')
const colour = ref('')
const size = ref(sizes[0])

const wasCarAdded = ref(false)
const submitting = ref(false)

const yearTouched = ref(false)
const currentYear = new Date().getFullYear()

const isYearValid = computed(() => {
  const y = Number(production_year.value)
  return production_year.value !== '' && !Number.isNaN(y) && y >= 1900 && y <= currentYear
})
const yearError = computed(() => yearTouched.value && !isYearValid.value)

const isFormValid = computed(
  () => make.value && model.value && colour.value && size.value && isYearValid.value,
)

const fetchUserId = async () => {
  const response = await api.get('api/users/user')
  userId.value = response.data.id
}

const addCar = async () => {
  if (!isFormValid.value) return
  submitting.value = true
  wasCarAdded.value = false
  try {
    await fetchUserId()
    const response = await api.post(`api/users/${userId.value}/add-car`, {
      make: make.value,
      model: model.value,
      production_year: production_year.value,
      colour: colour.value,
      size: size.value.toUpperCase(),
    })
    if (response.status === 200) {
      wasCarAdded.value = true
    }
  } catch (err) {
    console.error('Error adding car:', err)
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.pt-96 {
  padding-top: 6rem !important;
}
/* Screenshot styling copied */
.form-control,
.form-select {
  background-color: #fff !important;
  color: #575757 !important;
  border: 1px solid #bdbdbd !important;
  padding-top: 0.65rem !important;
  padding-bottom: 0.65rem !important;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}
.form-control:focus,
.form-select:focus {
  border-color: #ff6d01 !important;
  box-shadow: 0 0 0 0.2rem rgba(249, 115, 22, 0.25) !important;
  outline: none !important;
}

.card,
.card-body {
  background-color: #ffffff !important;
  border-radius: 0.5rem;
}

.btn-primary {
  background-color: transparent !important;
  border: 1px solid #ff6d01 !important;
  color: #575757 !important;
}
.btn-primary:hover {
  background-color: #ff6d01 !important;
  border-color: #ff6d01 !important;
  color: #fff !important;
}

.text-title {
  color: #141414 !important;
}
</style>

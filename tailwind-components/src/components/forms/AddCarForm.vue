<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <SectionHeading>
        <template #title>SAMOCHODY</template>
        <template #description>Dodaj swoje auto</template>
      </SectionHeading>
    </div>

    <div class="mx-auto w-full max-w-md rounded-lg border border-gray-200 bg-white shadow-md">
      <form class="p-6" @submit.prevent="addCar">
        <label for="make" class="mb-1 block text-sm font-medium text-gray-700"> Marka </label>
        <input
          id="make"
          v-model="make"
          type="text"
          name="make"
          placeholder="Renault"
          class="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary-orange focus:outline-none focus:ring-1 focus:ring-primary-orange"
          required
        />
        <label for="model" class="mb-1 block text-sm font-medium text-gray-700"> Model </label>
        <input
          id="model"
          v-model="model"
          type="text"
          name="model"
          placeholder="Clio 4"
          class="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary-orange focus:outline-none focus:ring-1 focus:ring-primary-orange"
          required
        />

        <label for="production_year" class="mb-1 block text-sm font-medium text-gray-700">
          Rok produkcji
        </label>
        <input
          id="production_year"
          v-model="production_year"
          type="text"
          name="production_year"
          placeholder="2014"
          class="mb-1 w-full rounded-md border px-3 py-2"
          :class="
            yearError
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-primary-orange focus:ring-primary-orange'
          "
          @blur="yearTouched = true"
          required
        />
        <p v-if="yearError" class="mt-[-2px] mb-3 text-xs text-red-500">
          Podaj prawidłowy rok (1900 - {{ currentYear }}).
        </p>

        <label for="colour" class="mb-1 block text-sm font-medium text-gray-700"> Kolor </label>
        <input
          id="colour"
          v-model="colour"
          type="text"
          name="colour"
          placeholder="Czarny"
          class="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary-orange focus:outline-none focus:ring-1 focus:ring-primary-orange"
          required
        />
        <label for="selector" class="mb-1 block text-sm font-medium text-gray-700"> Rozmiar </label>
        <select
          id="selector"
          v-model="size"
          name="selector"
          class="mb-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary-orange focus:outline-none focus:ring-1 focus:ring-primary-orange"
        >
          <option v-for="carSize in sizes" :key="carSize" :value="carSize">
            {{ carSize }}
          </option>
        </select>

        <button
          type="submit"
          :disabled="submitting || !isFormValid"
          class="mt-6 w-full rounded-md bg-primary-orange px-4 py-2 font-medium text-white shadow disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
        >
          {{ submitting ? 'Dodawanie…' : 'Dodaj' }}
        </button>

        <p v-if="wasCarAdded" class="mt-2 text-sm text-green-600">Pomyślnie dodano samochód.</p>
      </form>
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
  } catch (error) {
    console.error('Error adding car:', error)
    // you can also show a user-facing message here:
    console.log('Nie udało się dodać samochodu, spróbuj ponownie.')
  } finally {
    submitting.value = false
  }
}
</script>

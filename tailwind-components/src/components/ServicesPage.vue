<template>
  <div class="bg-background">
    <div class="container mx-auto max-w-screen-xl pt-24">
      <h2 class="pb-8 sm:pb-10 md:pb-12 lg:pb-14 text-center">Poznaj nasze wszystkie usługi</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4 px-6 sm:px-8 lg:px-4 xl:px-0"
      >
        <div v-for="(image, index) in serviceImages" :key="index">
          <img :src="image.src" :alt="image.alt" class="rounded-t-xl relative" />
          <div
            class="border-b border-r border-l border-borders rounded-b-xl pb-4 pl-6 pt-4 text-title"
          >
            <div class="body-text-lg font-semibold pb-0.5">
              {{ image.name }}
            </div>
            <p class="pb-3 pr-4">
              {{ image.description }}
            </p>
            <div class="flex items-center pb-2">
              <img
                src="@/assets/images/icons/dollar_symbol.svg"
                :alt="iconAlt"
                class="filter grayscale pr-2"
              />
              <p class="body-text-md-medium pr-1">{{ image.minPrice }}</p>
              <p class="body-text-md">PLN</p>
              <p class="body-text-md px-1">-</p>
              <p class="body-text-md-medium pr-1">{{ image.maxPrice }}</p>
              <p class="body-text-md">PLN</p>
            </div>
            <div class="flex items-center pb-2">
              <img
                src="@/assets/images/icons/clock.svg"
                :alt="iconAlt"
                class="filter grayscale pr-2"
              />
              <p class="body-text-md-medium">{{ image.minTime }}</p>
              <p class="body-text-md">h</p>
              <p class="body-text-md px-1">-</p>
              <p class="body-text-md-medium">{{ image.maxTime }}</p>
              <p class="body-text-md">h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const serviceImages = [
  {
    src: new URL('@/assets/images/services/foamed_porsche.jpg', import.meta.url).href,
    alt: 'Foamed Porsche during wash',
    name: 'Mycie ręczne',
    description: 'Podstawowy opis wykonywanej usługi',
    minPrice: 400,
    maxPrice: 1000,
    minTime: 1,
    maxTime: 8,
  },
  {
    src: new URL('@/assets/images/services/car_hood_ppf.jpg', import.meta.url).href,
    alt: 'Car hood with paint protection film',
    name: 'Paint Protection Film',
    description: 'Podstawowy opis wykonywanej usługi',
    minPrice: 400,
    maxPrice: 1000,
    minTime: 1,
    maxTime: 8,
  },
  {
    src: new URL('@/assets/images/services/machine_polishing_cropped.jpg', import.meta.url).href,
    alt: 'Machine polishing a car surface',
    name: 'Korekta lakieru',
    description: 'Podstawowy opis wykonywanej usługi',
    minPrice: 400,
    maxPrice: 1000,
    minTime: 1,
    maxTime: 8,
  },
  {
    src: new URL('@/assets/images/services/porsche_ceramic_coating.jpg', import.meta.url).href,
    alt: 'Porsche with ceramic coating applied',
    name: 'Powłoka ceramiczna',
    description: 'Podstawowy opis wykonywanej usługi',
    minPrice: 400,
    maxPrice: 1000,
    minTime: 1,
    maxTime: 8,
  },
  {
    src: new URL('@/assets/images/services/porsche_interior_cleaning.jpg', import.meta.url).href,
    alt: 'Porsche interior cleaning in progress',
    name: 'Czyszczenie wnętrza',
    description: 'Podstawowy opis wykonywanej usługi',
    minPrice: 400,
    maxPrice: 1000,
    minTime: 1,
    maxTime: 8,
  },
  {
    src: new URL('@/assets/images/services/window_tint.jpg', import.meta.url).href,
    alt: 'Applying window tint to car',
    name: 'Przyciemnianie szyb',
    description: 'Podstawowy opis wykonywanej usługi',
    minPrice: 400,
    maxPrice: 1000,
    minTime: 1,
    maxTime: 8,
  },
]
</script>

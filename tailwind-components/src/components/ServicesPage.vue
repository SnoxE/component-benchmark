<template>
  <div class="bg-background">
    <div class="container mx-auto max-w-screen-xl pt-24">
      <SectionHeading>
        <template #title>OFERTA</template>
        <template #description>Poznaj nasze wszystkie usługi</template>
      </SectionHeading>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4 px-6 sm:px-8 lg:px-4 xl:px-0 pb-8"
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
import SectionHeading from '@/components/SectionHeading.vue'

const serviceImages = [
  {
    src: new URL('@/assets/images/services/foamed_porsche-750.webp', import.meta.url).href,
    alt: 'Foamed Porsche during wash',
    name: 'Mycie ręczne',
    description:
      'Mycie karoserii przy użyciu bezpiecznych środków i technik, które gwarantują czystość bez ryzyka zarysowań.',
    minPrice: 100,
    maxPrice: 140,
    minTime: 1,
    maxTime: 1.5,
  },
  {
    src: new URL('@/assets/images/services/car_hood_ppf-750.webp', import.meta.url).href,
    alt: 'Car hood with paint protection film',
    name: 'Paint Protection Film',
    description:
      'Folia ochronna najwyższej jakości, która zabezpiecza lakier przed zarysowaniami, odpryskami i czynnikami zewnętrznymi.',
    minPrice: 2500,
    maxPrice: 4000,
    minTime: 8,
    maxTime: 10,
  },
  {
    src: new URL('@/assets/images/services/machine_polishing_cropped-750.webp', import.meta.url)
      .href,
    alt: 'Machine polishing a car surface',
    name: 'Korekta lakieru',
    description:
      'Profesjonalna korekta lakieru usuwające rysy, zmatowienia i hologramy, przywracająca głębię koloru i połysk lakieru.',
    minPrice: 1500,
    maxPrice: 2100,
    minTime: 8,
    maxTime: 10,
  },
  {
    src: new URL('@/assets/images/services/porsche_ceramic_coating-750.webp', import.meta.url).href,
    alt: 'Porsche with ceramic coating applied',
    name: 'Powłoka ceramiczna',
    description:
      'Zaawansowana ochrona lakieru, która zwiększa trwałość, nadaje szklisty połysk i ułatwia codzienną pielęgnację auta.',
    minPrice: 1800,
    maxPrice: 2400,
    minTime: 6,
    maxTime: 7,
  },
  {
    src: new URL('@/assets/images/services/porsche_interior_cleaning-750.webp', import.meta.url)
      .href,
    alt: 'Porsche interior cleaning in progress',
    name: 'Czyszczenie wnętrza',
    description:
      'Kompleksowe odświeżenie wnętrza - czyszczenie tapicerki, plastików i detali, aby Twój samochód wyglądał i pachniał jak nowy.',
    minPrice: 600,
    maxPrice: 750,
    minTime: 6,
    maxTime: 7,
  },
  {
    src: new URL('@/assets/images/services/window_tint-750.webp', import.meta.url).href,
    alt: 'Applying window tint to car',
    name: 'Przyciemnianie szyb',
    description:
      'Estetyczne i funkcjonalne przyciemnienie szyb, poprawiające komfort jazdy, prywatność oraz ochronę przed promieniowaniem UV.',
    minPrice: 600,
    maxPrice: 1000,
    minTime: 4,
    maxTime: 6,
  },
]
</script>

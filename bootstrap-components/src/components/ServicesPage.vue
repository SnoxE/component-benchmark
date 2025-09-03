<template>
  <div class="bg-light">
    <div class="container-xl pt-96">
      <SectionHeading>
        <template #title>OFERTA</template>
        <template #description>Poznaj nasze wszystkie usługi</template>
      </SectionHeading>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-3 px-sm-4 px-lg-2 pb-4">
        <div class="col" v-for="(image, index) in serviceImages" :key="index">
          <div class="card h-100 border-light bg-white text-black">
            <img :src="image.src" :alt="image.alt" class="card-img-top rounded-top" />
            <div class="card-body pb-2">
              <h5 class="card-title fw-semibold">{{ image.name }}</h5>
              <p class="card-text mb-3">{{ image.description }}</p>

              <div class="d-flex align-items-center mb-2">
                <img
                  src="@/assets/images/icons/dollar_symbol.svg"
                  alt="Price"
                  class="me-2 opacity-75"
                  width="20"
                />
                <span class="fw-medium me-1">{{ image.minPrice }}</span>
                <span>PLN</span>
                <span class="px-1">-</span>
                <span class="fw-medium me-1">{{ image.maxPrice }}</span>
                <span>PLN</span>
              </div>

              <div class="d-flex align-items-center">
                <img
                  src="@/assets/images/icons/clock.svg"
                  alt="Duration"
                  class="me-2 opacity-75"
                  width="20"
                />
                <span class="fw-medium">{{ image.minTime }}</span>
                <span>h</span>
                <span class="px-1">-</span>
                <span class="fw-medium">{{ image.maxTime }}</span>
                <span>h</span>
              </div>
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

<style scoped>
.pt-96 {
  padding-top: 6rem !important;
}

.card {
  transition: all 0.3s ease;
  background-color: white !important;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

:root {
  --bs-primary: #ff6d01;
}

.bg-light {
  background-color: #ffffff;
}
</style>

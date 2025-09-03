<template>
  <div class="container-xl px-3 px-lg-5 pb-5">
    <SectionHeading>
      <template #title>NASZE USŁUGI</template>
      <template #description>Zapoznaj się z naszymi najpopularniejszymi usługami</template>
    </SectionHeading>

    <swiper-container
      slides-per-view="3"
      speed="500"
      pagination="true"
      :breakpoints="{
        '0': { slidesPerView: 1 },
        '640': { slidesPerView: 2 },
        '1220': { slidesPerView: 3 },
      }"
      class="mb-4"
    >
      <swiper-slide v-for="(image, index) in serviceImages" :key="index">
        <div class="px-3 h-100">
          <div class="card h-100 border-light border">
            <img :src="image.src" :alt="image.alt" class="card-img-top" loading="lazy" />
            <div class="card-body d-flex flex-column justify-content-between bg-white px-24">
              <div>
                <h5 class="card-title text-black fw-bold mb-3">{{ image.name }}</h5>
                <p class="card-text text-black text-secondary">{{ image.description }}</p>
              </div>
              <div class="mt-4 text-black">
                <small class="text-secondary text-black">od</small>
                <span class="fs-5 fw-bold ms-1">{{ image.minPrice }}</span>
                <span class="ms-1">PLN</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="text-center">
      <router-link class="btn btn-outline-secondary rounded-pill px-4" to="/services">
        Poznaj naszą pełną ofertę →
      </router-link>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'

const serviceImages = [
  {
    src: new URL('@/assets/images/services/foamed_porsche-750.webp', import.meta.url).href,
    alt: 'Foamed Porsche during wash',
    name: 'Mycie ręczne',
    description:
      'Mycie karoserii przy użyciu bezpiecznych środków i technik, które gwarantują czystość bez ryzyka zarysowań.',
    minPrice: 100,
  },
  {
    src: new URL('@/assets/images/services/car_hood_ppf-750.webp', import.meta.url).href,
    alt: 'Car hood with paint protection film',
    name: 'Paint Protection Film',
    description:
      'Folia ochronna najwyższej jakości, która zabezpiecza lakier przed zarysowaniami, odpryskami i czynnikami zewnętrznymi.',
    minPrice: 2500,
  },
  {
    src: new URL('@/assets/images/services/machine_polishing_cropped-750.webp', import.meta.url)
      .href,
    alt: 'Machine polishing a car surface',
    name: 'Korekta lakieru',
    description:
      'Profesjonalna korekta lakieru usuwające rysy, zmatowienia i hologramy, przywracająca głębię koloru i połysk lakieru.',
    minPrice: 1500,
  },
  {
    src: new URL('@/assets/images/services/porsche_ceramic_coating-750.webp', import.meta.url).href,
    alt: 'Porsche with ceramic coating applied',
    name: 'Powłoka ceramiczna',
    description:
      'Zaawansowana ochrona lakieru, która zwiększa trwałość, nadaje szklisty połysk i ułatwia codzienną pielęgnację auta.',
    minPrice: 1800,
  },
  {
    src: new URL('@/assets/images/services/porsche_interior_cleaning-750.webp', import.meta.url)
      .href,
    alt: 'Porsche interior cleaning in progress',
    name: 'Czyszczenie wnętrza',
    description:
      'Kompleksowe odświeżenie wnętrza - czyszczenie tapicerki, plastików i detali, aby Twój samochód wyglądał i pachniał jak nowy.',
    minPrice: 600,
  },
  {
    src: new URL('@/assets/images/services/window_tint-750.webp', import.meta.url).href,
    alt: 'Applying window tint to car',
    name: 'Przyciemnianie szyb',
    description:
      'Estetyczne i funkcjonalne przyciemnienie szyb, poprawiające komfort jazdy, prywatność oraz ochronę przed promieniowaniem UV.',
    minPrice: 600,
  },
]
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
  border-color: #c4c4c4 !important;
  border-radius: 1rem 1rem 1rem 1rem;
  background-color: transparent;
}

.card-body {
  border-color: #c4c4c4 !important;
  border-radius: 0 0 1rem 1rem;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.card-img-top {
  border-radius: 1rem 1rem 0 0;
  aspect-ratio: 4/3;
  object-fit: cover;
}

.px-24 {
  padding-left: 24px;
  padding-right: 24px;
}

swiper-slide {
  display: flex;
  height: auto;
}

swiper-container::part(bullet-active) {
  background-color: var(--bs-primary, #ff6d01);
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: -20px;
}

:root {
  --bs-primary: #ff6d01;
}
</style>

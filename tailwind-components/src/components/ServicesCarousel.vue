<template>
  <div class="flex flex-col max-w-screen-xl w-full mx-auto xs:px-4 lg:px-12 xl:px-8 pb-20">
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
      class="mb-10"
    >
      <swiper-slide v-for="(image, index) in serviceImages" :key="index">
        <div class="px-4 h-full">
          <img :src="image.src" :alt="image.alt" class="rounded-t-2xl" loading="lazy" />
          <div
            class="flex flex-col justify-between border-b border-r border-l border-borders rounded-b-2xl pb-4 px-6 pt-2 text-title"
          >
            <div class="body-text-lg font-semibold pb-0.5">
              {{ image.name }}
            </div>
            <p class="pb-3">
              {{ image.description }}
            </p>
            <div class="flex gap-1 items-baseline pb-3 pt-2">
              <p class="body-text-xs">od</p>
              <p class="body-text-md-medium">{{ image.minPrice }}</p>
              <p class="body-text-md">PLN</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
    <router-link
      class="mx-auto border px-4 py-2 rounded-full border-borders body-text-sm font-medium"
      to="/services"
    >
      Poznaj naszą pełną ofertę →
    </router-link>
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
/* .swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: clip;
  list-style: none;
  padding: 0px;
  z-index: 1;
  display: block;
  padding-bottom: 30px;
} */

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: -20px;
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
}

swiper-slide {
  display: flex;
}
swiper-slide > div {
  height: 100%;
  width: 100%;
}

swiper-container::part(bullet-active) {
  background-color: #ff6d01;
}
</style>

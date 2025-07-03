<template>
  <div class="flex flex-col max-w-screen-xl w-full mx-auto px-8 pb-20">
    <!-- <h2
      class="mb-10 text-title mx-auto after:block after:h-0.5 after:bg-primary-orange after:rounded-full after:mt-1"
    >
      Nasze usługi
    </h2> -->
    <SectionHeading>
      <template #title>NASZE USŁUGI</template>
      <template #description>Zapoznaj się z naszymi najpopularniejszymi usługami</template>
    </SectionHeading>
    <swiper-container slides-per-view="3" speed="500" pagination="true" class="mb-10">
      <swiper-slide v-for="(image, index) in serviceImages" :key="index">
        <div class="px-4">
          <img :src="image.src" :alt="image.alt" class="rounded-t-[2rem]" />
          <div
            class="border-b border-r border-l border-borders rounded-b-[2rem] pb-4 pl-4 pt-2 text-title"
          >
            <div class="body-text-lg font-semibold pb-0.5">
              {{ image.name }}
            </div>
            <p class="pb-3">
              {{ image.description }}
            </p>
            <div class="flex gap-1 items-baseline">
              <p class="body-text-xs">od</p>
              <p class="body-text-md-medium">{{ image.price }}</p>
              <p class="body-text-md">PLN</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
    <router-link
      class="mx-auto border px-4 py-2 rounded-full border-borders body-text-sm font-medium"
      to="#"
    >
      Poznaj naszą pełną ofertę →
    </router-link>
  </div>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'

const serviceImages = [
  {
    src: new URL('@/assets/images/services/foamed_porsche.jpg', import.meta.url).href,
    alt: 'Foamed Porsche during wash',
    name: 'Mycie ręczne',
    description: 'Podstawowy opis wykonywanej usługi',
    price: 400,
  },
  {
    src: new URL('@/assets/images/services/car_hood_ppf.jpg', import.meta.url).href,
    alt: 'Car hood with paint protection film',
    name: 'Paint Protection Film',
    description: 'Podstawowy opis wykonywanej usługi',
    price: 400,
  },
  {
    src: new URL('@/assets/images/services/machine_polishing_cropped.jpg', import.meta.url).href,
    alt: 'Machine polishing a car surface',
    name: 'Polerowanie',
    description: 'Podstawowy opis wykonywanej usługi',
    price: 400,
  },
  {
    src: new URL('@/assets/images/services/porsche_ceramic_coating.jpg', import.meta.url).href,
    alt: 'Porsche with ceramic coating applied',
    name: 'Powłoka ceramiczna',
    description: 'Podstawowy opis wykonywanej usługi',
    price: 400,
  },
  {
    src: new URL('@/assets/images/services/porsche_interior_cleaning.jpg', import.meta.url).href,
    alt: 'Porsche interior cleaning in progress',
    name: 'Czyszczenie wnętrza',
    description: 'Podstawowy opis wykonywanej usługi',
    price: 400,
  },
  {
    src: new URL('@/assets/images/services/window_tint.jpg', import.meta.url).href,
    alt: 'Applying window tint to car',
    name: 'Przyciemnianie szyb',
    description: 'Podstawowy opis wykonywanej usługi',
    price: 400,
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

swiper-container::part(bullet-active) {
  background-color: #ff6d01;
}
</style>

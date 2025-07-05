<template>
  <div class="max-w-screen-xl items-center w-full mx-auto px-8 pb-14">
    <swiper-container
      slides-per-view="6"
      speed="500"
      :breakpoints="{
        '0': { slidesPerView: 2 },
        '510': { slidesPerView: 3 },
        '640': { slidesPerView: 4 },
        '850': { slidesPerView: 5 },
        '1220': { slidesPerView: 7 },
      }"
      loop
      autoplay
    >
      <swiper-slide v-for="(image, index) in logosImages" :key="index">
        <div class="flex items-center justify-center h-24 px-4">
          <img
            :src="image.src"
            :alt="image.alt"
            class="max-h-16 object-contain filter grayscale hover:grayscale-0"
          />
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
const logosImages = [
  {
    src: new URL('@/assets/images/logos/gyeon.png', import.meta.url).href,
    alt: 'GYEON logo',
  },
  {
    src: new URL('@/assets/images/logos/carpro.png', import.meta.url).href,
    alt: 'CarPro logo',
  },
  {
    src: new URL('@/assets/images/logos/ADBL.png', import.meta.url).href,
    alt: 'ADBL logo',
  },
  {
    src: new URL('@/assets/images/logos/fxprotect_copy.jpg', import.meta.url).href,
    alt: 'FX Protect logo',
  },
  {
    src: new URL('@/assets/images/logos/funky_witch.png', import.meta.url).href,
    alt: 'Funky Witch logo',
  },
  {
    src: new URL('@/assets/images/logos/kiurlab.png', import.meta.url).href,
    alt: 'KiurLab logo',
  },
  {
    src: new URL('@/assets/images/logos/soft99.png', import.meta.url).href,
    alt: 'Soft99 logo',
  },
  {
    src: new URL('@/assets/images/logos/work_stuff.png', import.meta.url).href,
    alt: 'Work Stuff logo',
  },
  {
    src: new URL('@/assets/images/logos/good_stuff.png', import.meta.url).href,
    alt: 'Good Stuff logo',
  },
]
</script>

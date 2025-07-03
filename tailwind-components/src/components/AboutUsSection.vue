<template>
  <div class="flex flex-col max-w-screen-xl w-full mx-auto px-8 pb-20">
    <!-- <h2
      class="mb-10 text-title mx-auto after:block after:h-0.5 after:bg-primary-orange after:rounded-full after:mt-1"
    >
      O Nas
    </h2> -->
    <SectionHeading>
      <template #title>O NAS</template>
      <template #description>Poznaj nas lepiej</template>
    </SectionHeading>
    <div class="grid grid-cols-2 items-center right-0">
      <div class="mx-auto">
        <img
          src="@/assets/images/orange_lamborghini_huracan.png"
          alt="Orange Lamborghini Huracan"
        />
      </div>
      <div>
        <p class="text-dark-gray text-lg">
          We are a specialized team committed to providing reliable car rental services. One of the
          advantages of renting a car from us is offering competitive and transparent prices. By
          providing services such as comprehensive insurance ......
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'
</script>

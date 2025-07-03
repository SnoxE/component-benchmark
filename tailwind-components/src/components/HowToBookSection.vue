<template>
  <SectionHeading>
    <template #title>JAK TO DZIAŁA</template>
    <template #description>Zarezerwuj wizytę w 4 prostych krokach</template>
  </SectionHeading>
  <div class="max-w-screen-xl w-full mx-auto px-8 pb-20">
    <div class="grid grid-cols-3 gap-8">
      <div class="flex flex-col items-center">
        <!-- SVG for location -->
        <div class="rounded-xl bg-white shadow-lg p-8 mb-4">
          <!-- Paste SVG code for pin/map here from Lucide/Heroicons -->
          <img src="@/assets/images/icons/car_with_tick.svg" alt="car" />
        </div>
        <h3 class="font-bold text-lg mb-1">Choose location</h3>
        <p class="text-gray-400 text-center">Choose your location and find your best car.</p>
      </div>
      <div class="flex flex-col items-center">
        <!-- SVG for calendar -->
        <div
          class="rounded-xl bg-gradient-to-t from-primary-orange to-[#ffa844] shadow-lg p-8 mb-4"
        >
          <img src="@/assets/images/icons/car_with_tick.svg" alt="car" />
        </div>
        <h3 class="font-bold text-lg mb-1">Pick-up date</h3>
        <p class="text-gray-400 text-center">Select your pick up date and time to book your car.</p>
      </div>
      <div class="flex flex-col items-center">
        <!-- SVG for car -->
        <div class="rounded-xl bg-white shadow-lg p-8 mb-4">
          <img src="@/assets/images/icons/car_with_tick.svg" alt="car" />
        </div>
        <h3 class="font-bold text-lg mb-1">Book your car</h3>
        <p class="text-gray-400 text-center">
          Book your car and we will deliver it directly to you.
        </p>
      </div>
    </div>
    <HowToBookElement class="pt-10"></HowToBookElement>
  </div>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'
import HowToBookElement from './HowToBookElement.vue'
</script>

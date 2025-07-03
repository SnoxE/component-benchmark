<template>
  <div class="flex flex-col items-center">
    <!-- SVG for car -->
    <div class="rounded-xl bg-primary-orange shadow-lg p-8 mb-4">
      <slot name="icon">
        <img :v-if="icon" :src="icon" :alt="iconAlt" />
      </slot>
    </div>
    <h3 class="font-bold text-lg mb-1">
      <slot name="heading">{{ heading }}</slot>
    </h3>
    <p class="text-gray-400 text-center">
      <slot name="description">{{ description }}</slot>
    </p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  iconAlt: {
    type: String,
    default: 'icon',
  },
  heading: String,
  description: String,
})
</script>

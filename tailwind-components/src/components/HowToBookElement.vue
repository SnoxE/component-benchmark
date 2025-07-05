<template>
  <div class="flex flex-col items-center">
    <div
      class="rounded-xl bg-gradient-to-t p-6 mb-4 shadow-lg"
      :class="[
        // Variant colors
        variant === 'white' && 'bg-background',
        variant === 'light-orange' && 'from-[#ffa844] to-[#ffd7a9] ',
        variant === 'orange' && 'from-primary-orange to-[#ffa844] ',
      ]"
    >
      <slot name="icon">
        <img :v-if="icon" :src="icon" :alt="iconAlt" class="w-10 filter grayscale" />
      </slot>
    </div>
    <h3 class="font-bold mb-1 text-center">
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
  variant: {
    type: String,
    default: 'white',
  },
})
</script>

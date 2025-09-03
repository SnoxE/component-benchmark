<template>
  <div class="d-flex flex-column align-items-center">
    <div
      class="rounded-3 p-4 mb-4 shadow"
      :class="[
        variant === 'white' && 'bg-white',
        variant === 'light-orange' && 'gradient-light-orange',
        variant === 'orange' && 'gradient-orange',
      ]"
    >
      <slot name="icon">
        <img :v-if="icon" :src="icon" :alt="iconAlt" class="icon-size grayscale" />
      </slot>
    </div>
    <h3 class="fw-bold mb-2 text-center">
      <slot name="heading">{{ heading }}</slot>
    </h3>
    <p class="text-secondary text-center">
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

<style scoped>
.icon-size {
  width: 2.5rem;
}

.grayscale {
  filter: grayscale(100%);
}

.gradient-light-orange {
  background: linear-gradient(to top, #ffa844, #ffd7a9);
}

.gradient-orange {
  background: linear-gradient(to top, var(--bs-primary, #ff6b00), #ffa844);
}
</style>

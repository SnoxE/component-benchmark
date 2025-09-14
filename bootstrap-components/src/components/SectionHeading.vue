<template>
  <div class="container-xl px-4 pb-5">
    <div class="text-center">
      <p class="overview-text mb-3 fw-medium">
        <slot name="title"></slot>
      </p>
      <h2 class="heading-text fw-semibold">
        <slot name="description"></slot>
      </h2>
    </div>
  </div>
</template>

<style scoped>
.overview-text {
  color: #a5a5a5;
}

.heading-text {
  color: #141414;
}
</style>

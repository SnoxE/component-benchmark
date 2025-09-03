<template>
  <div class="container-xl px-4 pb-5">
    <div class="text-center">
      <p class="text-secondary mb-3 fw-medium">
        <slot name="title"></slot>
      </p>
      <h2 class="fw-semibold">
        <slot name="description"></slot>
      </h2>
    </div>
  </div>
</template>

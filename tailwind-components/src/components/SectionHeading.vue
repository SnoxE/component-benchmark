<template>
  <div class="flex flex-col max-w-screen-xl w-full mx-auto px-8 pb-14">
    <p class="mb-3 text-[#a5a5a5] mx-auto font-heading font-medium">
      <slot name="title"></slot>
    </p>
    <h2 class="mx-auto font-semibold text-title">
      <slot name="description"></slot>
    </h2>
  </div>
</template>

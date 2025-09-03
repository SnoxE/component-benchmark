<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar></NavBar>
    <main class="flex-grow-1">
      <CarsPage />
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import CarsPage from '@/components/CarsPage.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

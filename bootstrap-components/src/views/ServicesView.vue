<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar></NavBar>
    <main class="flex-grow-1">
      <ServicesPage></ServicesPage>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import ServicesPage from '@/components/ServicesPage.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

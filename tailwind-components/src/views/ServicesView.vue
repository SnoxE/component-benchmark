<template>
  <div class="flex flex-col min-h-screen">
    <NavBar></NavBar>
    <main class="flex-1">
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

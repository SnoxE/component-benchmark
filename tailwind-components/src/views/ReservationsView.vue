<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import NavBar from '@/components/NavBar.vue'
import ReservationsPage from '@/components/ReservationsPage.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="flex-1">
      <ReservationsPage />
    </main>
    <FooterComponent />
  </div>
</template>

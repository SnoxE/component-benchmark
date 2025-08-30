<script setup>
import ContactPage from '@/components/forms/ContactPage.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="flex-1">
      <ContactPage />
    </main>
    <FooterComponent />
  </div>
</template>

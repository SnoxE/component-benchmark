<script setup>
import BookForm from '@/components/forms/BookForm.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="flex-1">
      <BookForm />
    </main>
    <FooterComponent />
  </div>
</template>

<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar></NavBar>
    <main class="flex-grow-1">
      <BookForm />
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import BookForm from '@/components/forms/BookForm.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

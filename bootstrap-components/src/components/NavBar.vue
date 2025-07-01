<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const urls = ref([
  { id: 'about', name: 'O nas', url: '/' },
  { id: 'oferta', name: 'Oferta', url: '/oferta' },
  { id: 'reserve', name: 'Rezerwuj', url: '/rezerwuj' },
  { id: 'login', name: 'Zaloguj', url: '/login' },
  { id: 'register', name: 'Zarejestruj', url: '/rejestracja' },
])
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-transparent position-absolute top-0 start-0 z-3 w-100">
    <div class="container-fluid max-w-screen-xl">
      <a class="navbar-brand fw-semibold fs-3" href="#">DG Detailing</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 fw-semibold">
          <li v-for="url in urls" :key="url.id" class="nav-item mx-3">
            <router-link class="link pb-1" aria-current="page" :to="url.url">
              {{ url.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.max-w-screen-xl {
  max-width: 1280px;
}

.link {
  color: white;
  position: relative;
  text-decoration: none;
}

.link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: white;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.link:hover::after {
  transform: scaleX(1);
}
</style>

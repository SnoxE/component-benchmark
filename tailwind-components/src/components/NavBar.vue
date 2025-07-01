<script setup></script>

<template>
  <div class="flex max-w-screen-xl mx-auto z-2 py-4 justify-between fixed w-full">
    <div class="">
      <router-link to="/" class="self-center text-primary-orange text-heading text-2xl">
        DG Detailing
      </router-link>
    </div>
    <nav class="flex space-around">
      <ul class="flex gap-8">
        <li><router-link class="text-sm">O Nas</router-link></li>
        <li><router-link class="text-sm">Oferta</router-link></li>
        <li><router-link class="text-sm">Rezerwuj</router-link></li>
      </ul>
      <button>
        <router-link class="text-sm bg-primary-orange rounded-md py-2 px-4">
          Zaloguj | Zarejestruj
        </router-link>
      </button>
    </nav>
  </div>
</template>

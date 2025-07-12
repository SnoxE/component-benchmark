<template>
  <div class="fixed w-full left-0 top-0 z-15">
    <div class="flex px-8 xl:px-0 max-w-screen-xl mx-auto py-8 justify-between">
      <div class="">
        <router-link to="/" class="self-center text-primary-orange text-heading text-2xl">
          DG Detailing
        </router-link>
      </div>
      <nav class="flex space-around">
        <ul class="hidden nav:flex nav:gap-8 nav:items-center">
          <li><router-link to="/" class="text-sm">O Nas</router-link></li>
          <li><router-link to="/" class="text-sm">Oferta</router-link></li>
          <li><router-link to="/" class="text-sm">Rezerwuj</router-link></li>
          <li><router-link to="/" class="text-sm">Kontakt</router-link></li>
          <li class="ml-20">
            <router-link to="/" class="text-sm bg-primary-orange rounded-md py-2 px-4">
              Zaloguj
            </router-link>
          </li>
        </ul>
        <button @click="isOpen = !isOpen" class="block nav:hidden cursor-pointer">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </div>
  </div>

  <div
    class="fixed inset-0 bg-black z-19 transition-opacity duration-300 ease-in-out"
    :class="isOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    @click="isOpen = false"
  ></div>
  <div
    class="fixed top-0 right-0 w-[95%] sm:w-3/4 h-full z-20 bg-background transform transition-transform duration-300 ease-in-out nav:hidden"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="bg-primary-orange p-4 flex justify-between items-center">
      <h4 class="text-background">Menu</h4>
      <button @click="isOpen = !isOpen" class="bg-title text-white rounded-md cursor-pointer">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <ul class="flex flex-col items-start">
      <li
        v-for="(item, index) in navBarItems"
        :key="index"
        class="border-b-1 border-light-gray-text w-full py-2 px-4"
      >
        <router-link :to="item.link" class="text-sm">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const navBarItems = [
  {
    name: 'O Nas',
    link: '/',
  },
  {
    name: 'Oferta',
    link: '/',
  },
  {
    name: 'Rezerwuj',
    link: '/',
  },
  {
    name: 'Kontakt',
    link: '/',
  },
  {
    name: 'Zaloguj',
    link: '/',
  },
]
</script>

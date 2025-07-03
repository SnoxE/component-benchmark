<script setup></script>

<template>
  <div class="fixed w-full left-0 top-0 z-1">
    <div class="flex max-w-screen-xl mx-auto py-8 justify-between">
      <div class="">
        <router-link to="/" class="self-center text-primary-orange text-heading text-2xl">
          DG Detailing
        </router-link>
      </div>
      <nav class="flex space-around">
        <ul class="flex gap-8 items-center">
          <li><router-link to="/" class="text-sm">O Nas</router-link></li>
          <li><router-link to="/" class="text-sm">Oferta</router-link></li>
          <li><router-link to="/" class="text-sm">Rezerwuj</router-link></li>
          <li><router-link to="/" class="text-sm">Kontakt</router-link></li>
          <li class="ml-20">
            <router-link to="/" class="text-sm bg-primary-orange rounded-md py-2 px-4">
              Zaloguj | Zarejestruj
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

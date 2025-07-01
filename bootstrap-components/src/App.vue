<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <!-- <div class="test">

  </div> -->

  <!-- <RouterView /> -->
  <NavBar> </NavBar>
  <HeroSection></HeroSection>
  <AboutSection></AboutSection>
</template>

<style scoped></style>

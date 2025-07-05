<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import NavBar from '@/components/NavBar.vue'
import AboutUsSection from './components/AboutUsSection.vue'
import ServicesCarousel from './components/ServicesCarousel.vue'
import LogosCarousel from './components/LogosCarousel.vue'
import HowToBookSection from './components/HowToBookSection.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <NavBar></NavBar>
  <HeroSection></HeroSection>
  <LogosCarousel></LogosCarousel>
  <AboutUsSection></AboutUsSection>
  <HowToBookSection></HowToBookSection>
  <ServicesCarousel></ServicesCarousel>
  <FooterComponent></FooterComponent>
</template>

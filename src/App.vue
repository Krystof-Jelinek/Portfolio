<script setup lang="ts">
  import AboutSection from './components/AboutSection.vue';
  import ContactSection from './components/ContactSection.vue';
  import CopyrightSection from './components/CopyrightSection.vue';
  import CVSection from './components/CVSection.vue';
  import HeroSection from './components/HeroSection.vue';
  import Navbar from './components/Navbar.vue';
  import PortfolioSection from './components/PortfolioSection.vue';
</script>

<template>
  <Navbar></Navbar>
  <HeroSection></HeroSection>
  <AboutSection></AboutSection>
  <PortfolioSection></PortfolioSection>
  <CVSection></CVSection>
  <ContactSection></ContactSection>
  <CopyrightSection></CopyrightSection>
</template>

<style scoped>

</style>

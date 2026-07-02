<script setup lang="ts">
  import HeroSection from './components/HeroSection.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar></Navbar>
  <HeroSection></HeroSection>

  
  <div class="tmp-content">
    TEMP CONTENT
  </div>


</template>

<style scoped>
  
  .tmp-content {
    height: 3000px;
  }

</style>

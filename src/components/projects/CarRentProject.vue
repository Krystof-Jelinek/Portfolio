<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="Car Rent Portal"
    :shortDescription="t('car.carShort')"
    :technologies="['Java', 'Spring Boot', 'REST API']"
  >
    <p>{{ t('car.carLong1') }}</p>
    <p>{{ t('car.carLong2') }}</p>
    <p>{{ t('car.carLong3') }}</p>
    <p>{{ t('car.carLong4') }}</p>
    <p>{{ t('car.carLong5') }}</p>

    <p>
      {{ t('car.carLong6') }}
      <br>
      <a href="https://github.com/Krystof-Jelinek/Spring-Boot-server" target="_blank">
        Backend GitHub Repository
      </a>
      <br>
      <a href="https://github.com/Krystof-Jelinek/Spring-Boot-klient" target="_blank">
        Frontend GitHub Repository
      </a>
    </p>
  </ProjectCard>
</template>
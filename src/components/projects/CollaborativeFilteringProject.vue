<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="Collaborative Filtering System"
    :shortDescription="t('cf.cfShort')"
    :technologies="['Python', 'Flask', 'React']"
  >
    <p>{{ t('cf.cfLong1') }}</p>
    
    <ul class="spaced-list">
        <li>{{ t('cf.cfLong2') }}</li>
        <li>{{ t('cf.cfLong3') }}</li>
        <li>{{ t('cf.cfLong4') }}</li>
        <li>{{ t('cf.cfLong5') }}</li>
    </ul>

    <p>
      {{ t('cf.cfLong6') }}
      <a href="https://github.com/Krystof-Jelinek/Colaborative-Filtering" target="_blank">
        Colaborative Filtering App
      </a>
    </p>
  </ProjectCard>
</template>

<style scoped>
    .spaced-list li {
    margin-bottom: 2rem;
}
</style>
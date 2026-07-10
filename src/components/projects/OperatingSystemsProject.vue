<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="Operating Systems Projects"
    :shortDescription="t('os.osProjectsShort')"
    :technologies="['Multithreading', 'File System', 'C++']"
  >
    <p>{{ t('os.osProjectsLong1') }}</p>
    <p>{{ t('os.osProjectsLong2') }}</p>
    <p>{{ t('os.osProjectsLong3') }}</p>

    <p>
      {{ t('os.osProjectsLong4') }}
      <br>
      <a href="https://github.com/Krystof-Jelinek/OperationalSystems" target="_blank" rel="noopener noreferrer">
        GitHub repository
      </a>
    </p>
  </ProjectCard>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';
const { t } = useI18n();

const thesisFile = `${import.meta.env.BASE_URL}bachelor-thesis.pdf`
</script>

<template>
  <ProjectCard 
    :title="t('Bachelor Thesis')"
    :shortDescription="t('thesis.short')"
    :technologies="['Kotlin', 'Spring Boot', 'Docker']"
  >
    <p>{{ t('thesis.long1') }}</p>
    <p>{{ t('thesis.long2') }}</p>
    <p>{{ t('thesis.long3') }}</p>
    <p>{{ t('thesis.long4') }}</p>
    <p>{{ t('thesis.long5') }}</p>
    
    <p>
      <span>
          {{ t('thesis.linksHeader') }}
      </span>
      <br>
      <a :href="thesisFile" download style="margin-right: 15px;">{{ t('thesis.downloadPdf') }}</a>
      <a href="https://hdl.handle.net/10467/182011" target="_blank">{{ t('thesis.dspaceLink') }}</a>
    </p>
  </ProjectCard>
</template>
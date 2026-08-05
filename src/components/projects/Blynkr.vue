<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="Blynkr"
    :shortDescription="t('blynkr.blynkrShort')"
    :technologies="['IT Consulting', 'Chrome Extensions', 'System Integrations']"
  >
    <p>{{ t('blynkr.blynkrLong1') }}</p>
    <p>{{ t('blynkr.blynkrLong2') }}</p>
    <p>{{ t('blynkr.blynkrLong3') }}</p>
    <p>{{ t('blynkr.blynkrLong4') }}</p>
    <p>{{ t('blynkr.blynkrLong5') }}</p>
  </ProjectCard>
</template>
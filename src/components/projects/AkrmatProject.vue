<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="Akrmat"
    :shortDescription="t('akrmat.akrmatShort')"
    :technologies="['Kotlin', 'LaTeX', 'API']"
  >
    <p>{{ t('akrmat.akrmatLong1') }}</p>
    <p>{{ t('akrmat.akrmatLong2') }}</p>
    <p>{{ t('akrmat.akrmatLong3') }}</p>
    <p>{{ t('akrmat.akrmatLong4') }}</p>
    <p>{{ t('akrmat.akrmatLong5') }}</p>
  </ProjectCard>
</template>
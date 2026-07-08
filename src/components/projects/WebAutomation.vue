<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="Web Automation"
    :shortDescription="t('scraper.scraperShort')"
    :technologies="['Playwright', 'React & WebSockets', 'Alembic']"
  >
    <p>{{ t('scraper.scraperLong1') }}</p>
    <p>{{ t('scraper.scraperLong2') }}</p>
    <p>{{ t('scraper.scraperLong3') }}</p>
    <p>{{ t('scraper.scraperLong4') }}</p>
    <p class="nda-warning">
        {{t('scraper.scraperNDA')}}
    </p>
  </ProjectCard>
</template>

<style scoped>
    .nda-warning {
    font-style: italic; 
    color: #888 !important;
    border-left: 2px solid #ccc; 
    padding-left: 15px; 
    margin-top: 20px;
    }
</style>
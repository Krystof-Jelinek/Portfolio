<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="Conceptual Modeling"
    :shortDescription="t('kom.komShort')"
    :technologies="['OntoUML', 'BPMN', 'Modeling']"
  >
    <p>{{ t('kom.komLong1') }}</p>
    <p>{{ t('kom.komLong2') }}</p>
    <p>{{ t('kom.komLong3') }}</p>
    <p>{{ t('kom.komLong4') }}</p>
    
    <p>{{ t('kom.komLong5') }}</p>
    
    <a href="/bi-kom_jelinkry_semestralka.pdf" target="_blank">
      {{ t('kom.viewProjectLink') }}
    </a>
  </ProjectCard>
</template>
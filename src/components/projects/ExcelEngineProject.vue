<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="Excel Engine"
    :shortDescription="t('excel.excelShort')"
    :technologies="['C++', 'Polymorphism', 'Inheritance']"
  >
    <p>{{ t('excel.excelLong1') }}</p>

    <ul class="spaced-list">
      <li><strong>Cell Handling: </strong> {{ t('excel.excelLong2') }}</li>
      <li><strong>Formula Evaluation: </strong> {{ t('excel.excelLong3') }}</li>
      <li><strong>Cyclic Dependency Detection: </strong> {{ t('excel.excelLong4') }}</li>
      <li><strong>External Parser Integration: </strong> {{ t('excel.excelLong5') }}</li>
    </ul>

    <p>{{ t('excel.excelLong6') }}</p>
  </ProjectCard>
</template>

<style scoped>
/* Lokální styl pro tento konkrétní seznam */
.spaced-list li {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
</style>
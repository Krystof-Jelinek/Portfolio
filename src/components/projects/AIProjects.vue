<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="AI Projects"
    :shortDescription="t('ai.aiShort')"
    :technologies="['Search Algorithms', 'Constraint Satisfaction', 'C++']"
  >
    <p>{{ t('ai.aiLong1') }}</p>
    
    <p>
      <strong>Labyrinth Solver:</strong> {{ t('ai.aiLong2') }}
    </p>
    <img src="../../assets/A_star_path.png" alt="Maze solver visualization" style="max-width: 100%; border-radius: 8px; margin: 10px 0;">
    
    <p>
      <strong>N-Queens Solver:</strong> {{ t('ai.aiLong3') }}
    </p>
    
    <p>
      <strong>Sudoku Solver:</strong> {{ t('ai.aiLong4') }}
    </p>
    <img src="../../assets/sudoku.png" alt="Sudoku solver visualization" style="max-width: 100%; border-radius: 8px; margin: 10px 0;">
    
    <p>
      <strong>PDDL Planning:</strong> {{ t('ai.aiLong5') }}
    </p>
    
    <p>{{ t('ai.aiLong6') }}</p>
    
    <a href="https://github.com/Krystof-Jelinek/AiProjects" target="_blank">
      {{ t('ai.viewProjectLink') }}
    </a>
  </ProjectCard>
</template>
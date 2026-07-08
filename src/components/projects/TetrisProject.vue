<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="Advanced Tetris"
    :shortDescription="t('tetrisShort')"
    :technologies="['Design Patterns', 'LAN Multiplayer', 'Pytest & Pylint']"
  >
    <p>{{ t('tetrisLong1') }}</p>
    <p>{{ t('tetrisLong2') }}</p>
    
    <div class="app-example">
      <img src="../../assets/Tetris.png" alt="Tetris Gameplay" style="max-width: 100%; border-radius: 8px;">
      <p>{{ t('tetrisExampleText') }}</p>
    </div>

    <p>{{ t('tetrisLong3') }}</p>
    <a href="https://github.com/Krystof-Jelinek/Advanced_Tetris" target="_blank">
      {{ t('viewProjectLink') }}
    </a>
  </ProjectCard>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="Advanced Tetris"
    :shortDescription="t('tetris.tetrisShort')"
    :technologies="['Design Patterns', 'LAN Multiplayer', 'Pytest & Pylint']"
  >
    <p>{{ t('tetris.tetrisLong1') }}</p>
    <p>{{ t('tetris.tetrisLong2') }}</p>

    <div class="app-example">
      <img src="../../assets/Tetris.png" alt="Tetris Gameplay" style="max-width: 100%; border-radius: 8px;">
      <p>{{ t('tetris.tetrisExampleText') }}</p>
    </div>

    <p>{{ t('tetris.tetrisLong3') }}</p>
    <p>{{ t('tetris.tetrisLong4') }}</p>

    <p>
      {{ t('tetris.tetrisLong5') }} 
      <a href="https://drive.google.com/file/d/1cmamcII9EuKU86f3oFSCVhNXQnwwAKa9/view" target="_blank">
        {{ t('tetris.Download') }}
      </a>
    </p>

    <p>{{ t('tetris.tetrisLong6') }}</p>
    <a href="https://github.com/Krystof-Jelinek/Advanced_Tetris" target="_blank">
      {{ t('tetris.viewProjectLink') }}
    </a>
  </ProjectCard>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="ASCII Art App"
    :shortDescription="t('asciiArt.asciiShort')"
    :technologies="['Scala', 'Object-Oriented Programming', 'Modular Design']"
  >
    <p>{{ t('asciiArt.asciiLong1') }}</p>
    <p>{{ t('asciiArt.asciiLong2') }}</p>
    <p>{{ t('asciiArt.asciiLong3') }}</p>
    <p>{{ t('asciiArt.asciiLong4') }}</p>
    
    <div class="app-example">
      <img src="../../assets/AsciiResult.png" alt="Tetris Gameplay" style="max-width: 100%; border-radius: 8px;">
      <p>{{ t('asciiArt.asciiLong5') }}</p>
    </div>

    <p>
      <span>
          {{ t('asciiArt.asciiLong6') }}
      </span>
      <br>
      <a href="https://github.com/Krystof-Jelinek/AsciiArtApp" target="_blank">AsciiArtApp</a>
    </p>
  </ProjectCard>
</template>
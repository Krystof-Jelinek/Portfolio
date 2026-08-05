<script setup lang="ts">
import { useI18n } from 'vue-i18n';

// 1. Naimportuješ si jednotlivé projekty
import AkrmatProject from './projects/AkrmatProject.vue';
import AsciiArtProject from './projects/AsciiArtProject.vue';
import TetrisProject from './projects/TetrisProject.vue';
import WebAutomation from './projects/WebAutomation.vue';
import CarRentProject from './projects/CarRentProject.vue';
import CollaborativeFilteringProject from './projects/CollaborativeFilteringProject.vue';
import AdvancedSqlProject from './projects/AdvancedSqlProject.vue';
import AIProjects from './projects/AIProjects.vue';
import ConceptualModelingProject from './projects/ConceptualModelingProject.vue';
import ExcelEngineProject from './projects/ExcelEngineProject.vue';
import OperatingSystemsProject from './projects/OperatingSystemsProject.vue';
import BachelorThesisProject from './projects/BachelorThesisProject.vue';
import Blynkr from './projects/Blynkr.vue';

const { t } = useI18n();

// 2. Vytvoříš pole komponent. Když budeš chtít přidat nový projekt, 
// nebo změnit jejich pořadí, uděláš to jen tady na jednom řádku.
const projects = [
  AkrmatProject,
  WebAutomation,
  Blynkr,
  BachelorThesisProject,
  TetrisProject,
  AsciiArtProject,
  CarRentProject,
  CollaborativeFilteringProject,
  AdvancedSqlProject,
  AIProjects,
  ConceptualModelingProject,
  ExcelEngineProject,
  OperatingSystemsProject,
];
</script>

<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <h2>{{ t('portfolio.header') }}</h2>
      
      <div class="portfolio-grid">
        <component 
          v-for="(ProjectComponent, index) in projects" 
          :key="index" 
          :is="ProjectComponent" 
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
    .portfolio {
        background: #E9F1FA;
        padding: 3rem 1.5rem; 
        scroll-margin-top: 40px;
    }

    .portfolio h2 {
        text-align: center; 
        font-size: 2rem; 
        color: #333; 
        margin-bottom: 2rem; 
    }

    .container {
        margin: 0 auto;
        padding: 0 1rem;
        box-sizing: border-box;
    }

    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        width: 100%;
        align-items: start;
    }

    @media (max-width: 992px) {
        .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .portfolio {
            padding: 2rem 1rem; 
        }

        .portfolio h2 {
            font-size: 1.8rem; 
            margin-bottom: 1.5rem;
        }
        
        .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 1rem; 
        }
    }
</style>
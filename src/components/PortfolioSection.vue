<script setup lang="ts">
import { useI18n } from 'vue-i18n';

// 1. Naimportuješ si jednotlivé projekty
import AkrmatProject from './projects/AkrmatProject.vue';
import AsciiArtProject from './projects/AsciiArtProject.vue';
import TetrisProject from './projects/TetrisProject.vue';
import WebAutomation from './projects/WebAutomation.vue';

const { t } = useI18n();

// 2. Vytvoříš pole komponent. Když budeš chtít přidat nový projekt, 
// nebo změnit jejich pořadí, uděláš to jen tady na jednom řádku.
const projects = [
  AkrmatProject,
  WebAutomation,
  AsciiArtProject,
  TetrisProject
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
    /* Obal celé sekce Portfolio */
    .portfolio {
        background: #E9F1FA;
        padding: 3rem 1.5rem; 
        scroll-margin-top: 40px; /* Aby to navbar nepřekrýval při scrollování */
    }

    /* Nadpis sekce */
    .portfolio h2 {
        text-align: center; 
        font-size: 2rem; 
        color: #333; 
        margin-bottom: 1rem; 
    }

    /* Náš nový Grid, který nahradil starou HTML tabulku */
    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        width: 100%;
    }

    /* Responzivita pouze pro tento obal */
    @media (max-width: 768px) {
        .portfolio {
            padding: 2rem 1rem; 
        }

        .portfolio h2 {
            font-size: 1.8rem; 
        }
        
        .portfolio-grid {
            gap: 1rem; /* Na mobilu dáme projekty blíž k sobě */
        }
    }
</style>
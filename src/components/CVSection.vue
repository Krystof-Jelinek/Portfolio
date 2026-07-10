<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Pokud máš PDF ve složce public/, používá se cesta od rootu:
const cvFile = '/Krystof-Jelinek-zivotopis.pdf'
</script>

<template>
  <section id="cv" class="cv">
    <div class="container">
      <h2>{{ t('cv.title') }}</h2>

      <p>
        {{ t('cv.text') }}:
      </p>

      <div class="cv-buttons">
        <a
          :href="cvFile"
          class="cv-btn view"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t('cv.view') }}
        </a>

        <a
          :href="cvFile"
          class="cv-btn download"
          download
        >
          {{ t('cv.download') }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cv {
  background: #E9F1FA;
  scroll-margin-top: 40px;
  padding: 3rem 1rem;
}

.container {
  margin: 0 auto;
}

.cv h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
}

.cv p {
  text-align: center;
  font-size: 20px;
  color: #333;
  line-height: 1.6;
  margin: 0 auto;
}

.cv-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.cv-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.7rem 3rem;
  width: 200px;
  border-radius: 8px;

  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: white;

  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  border: none;
}

.cv-btn.view {
  background-color: #00ABE4;
}

.cv-btn.view:hover {
  background-color: #007ba7;
  transform: translateY(-2px);
}

.cv-btn.download {
  background-color: #28a745;
}

.cv-btn.download:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .cv {
    padding: 2rem 1rem;
  }

  .cv h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }

  .cv p {
    font-size: 16px;
    margin-bottom: 1rem;
  }

  .cv-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .cv-btn {
    padding: 0.5rem 2rem;
    width: 100%;
    max-width: 260px;
    font-size: 0.9rem;
    border-radius: 6px;
  }

  .cv-btn.download:hover,
  .cv-btn.view:hover {
    transform: none;
  }
}
</style>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import photo from '@/assets/photo.png'

const { t } = useI18n()
</script>

<template>
  <section
    id="about"
    class="about"
  >
    <div class="container">
      <h2>
        {{ t('about.title') }}
      </h2>

      <div class="about-content">
        <div class="about-image">
          <img
            :src="photo"
            alt="My Photo"
          >
        </div>

        <div class="about-text">
          <p>
            {{ t('about.text') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
    .about {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 3rem 1rem;

        background: #E9F1FA;

        min-height: 40vh;

        scroll-margin-top: 40px;
    }

    .container {
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1 rem;

    }

    .about-content {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .about h2 {
        margin-bottom: 1rem;
        font-size: 2rem;
        color: #333;
    }

    .about-text {
        flex: 1;
        font-size: 1.33rem;
        line-height: 1.6;
    }

    .about-image {
        width: 150px;
        height: 150px;

        border-radius: 50%;

        overflow: hidden;

        flex-shrink: 0;
    }

    .about-image img {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    @media (max-width: 768px) {

        .about {
            padding: 2rem 1rem;
        }

        .about-content {
            flex-direction: column;
            text-align: center;
        }

        .about-text {
            font-size: 1rem;
        }

        .about-image {
            width: 120px;
            height: 120px;
        }

        .about h2 {
            font-size: 1.5rem;
        }
    }
</style>
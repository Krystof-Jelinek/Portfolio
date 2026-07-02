<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="container">
      <h2>
        {{ t('hero.welcome') }}
      </h2>

      <p>
        {{ t('hero.moto') }}
      </p>

      <a
        href="#contact"
        class="cta-button"
      >
        {{ t('hero.connectButton') }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
    background: linear-gradient(90deg, #00ABE4, #d9e9fc);
    background-size: 200% 100%;
    animation: gradientFlow 8s ease infinite;

    color: white;
    text-align: center;

    padding: 3.5rem 1rem;
}


.hero p {
    margin-top: 1rem;
    margin-bottom: 0rem;
}


@keyframes gradientFlow {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.hero h2 {
    font-size: 50px;
}

.cta-button {
    background: #FFFFFF;
    color: #00ABE4;
    padding: 0.7rem 1rem;
    border-radius: 5px;
    margin-top: 1rem;
    font-weight: bold;
    display: inline-block;
    transition: 0.3s ease, color 0.3s ease;
}

.cta-button:hover {
    background: #00ABE4;
    color: #FFFFFF;
}

@media (max-width: 768px) {
    .hero {
        padding: 2rem 1rem;
    }

    .hero h2 {
        font-size: 36px;
    }

    .cta-button {
        padding: 0.5rem 0.8rem;
        font-size: 0.9rem;
    }
}
</style>
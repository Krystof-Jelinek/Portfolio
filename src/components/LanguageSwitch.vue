<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  type Language = 'en' | 'cz'
  const { locale } = useI18n()

  const setLanguage = (language: Language) => {
    locale.value = language
}


</script>

<template>
  <div class="language-switch">
    <button
      class="flag-button"
      @click="setLanguage('en')"
    >
      <img
        src="@/assets/english-flag.png"
        alt="English"
      />
    </button>

    <button
      class="flag-button"
      @click="setLanguage('cz')"
    >
      <img
        src="@/assets/czech-flag.png"
        alt="Czech"
      />
    </button>
  </div>
</template>

<style scoped>

.language-switch {
  display: flex;
  gap: 0.5rem;
}

.flag-button:first-child {
  margin-right: 0.5rem;
}


.flag-button {
  width: 36px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

.flag-button img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
}
</style>
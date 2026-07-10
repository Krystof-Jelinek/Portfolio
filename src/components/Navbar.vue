<script setup lang="ts">
    import {ref} from 'vue'
    import { useI18n } from 'vue-i18n';
    import LanguageSwitch from './LanguageSwitch.vue';
    const { t } = useI18n()
    
    const isMenuOpen = ref(false)

    const menuItems = [
    {
        key: 'about',
        href: '#about',
    },
    {
        key: 'portfolio',
        href: '#portfolio',
    },
    {
        key: 'cv',
        href: '#cv',
    },
    {
        key: 'contact',
        href: '#contact',
    },
    ]

</script>

<template>
  <nav class="navbar">

    <button
      class="hamburger"
      @click="isMenuOpen = !isMenuOpen"
    >
      ☰
    </button>

    <div class="logo">
      Kryštof Jelínek
    </div>

    <ul
      class="nav-links"
      :class="{ open: isMenuOpen }"
    >
      <li
        v-for="item in menuItems"
        :key="item.href"
      >
        <a
          :href="item.href"
          @click="isMenuOpen = false"
        >
          {{ t(`navbar.${item.key}`) }}
        </a>
      </li>
    </ul>

    <LanguageSwitch />

  </nav>
</template>

<style scoped>
    .navbar {
        background: #1f3035;
        color: #FFFFFF;
        padding: 1.2rem 2rem;
        position: sticky;
        top: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
    }

    .navbar .logo {
        font-size: 1.6rem;
        margin-right: auto;
    }

    .nav-links {
        list-style: none;
        display: flex;
        gap: 1.5rem;
        margin: 0 auto;
    }

    .language-switch {
        display: flex;
        gap: 0.5rem;
        margin-left: auto;
    }

    .nav-links a {
        color: #FFFFFF;
        font-weight: bold;
        font-size: 1.1rem;
        padding: 0.5rem 1rem;
    }

    .flag-button {
        width: 36px;
        height: 24px;
    }

    .hamburger {
        display: none;

        background: none;
        border: none;

        color: white;
        font-size: 2rem;

        cursor: pointer;

        margin-right: 1rem;
    }

    @media (max-width: 768px) {

    .navbar {
        padding: 1rem;
        position: relative;
    }

    .logo {
        font-size: 1.2rem;
        margin-right: auto;
    }

    .hamburger {
        display: block;
    }

    .nav-links {
        display: none;

        position: absolute;

        top: 100%;
        left: 0;

        width: 100%;

        flex-direction: column;

        background: #1f3035;

        margin: 0;
        padding: 1rem 0;
    }

    .nav-links.open {
        display: flex;
    }

    .nav-links li {
        text-align: center;
    }

    .nav-links a {
        display: block;
        padding: 1rem;
    }
}
</style>
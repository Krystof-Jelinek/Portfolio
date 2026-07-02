<script setup lang="ts">

    import { useI18n } from 'vue-i18n';
    import LanguageSwitch from './LanguageSwitch.vue';
    const { t } = useI18n()
    
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
    <div class="logo">
      Kryštof Jelínek
    </div>

    <ul class="nav-links">
      <li
        v-for="item in menuItems"
        :key="item.href"
      >
        <a :href="item.href">
            {{ t(`navbar.${item.key}`) }}
        </a>
      </li>
    </ul>
    
    <LanguageSwitch></LanguageSwitch>
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
</style>
import { createI18n } from 'vue-i18n'
import navbarCz from './cz/navbar'
import navbarEn from './en/navbar'

import heroEn from './en/hero'
import heroCz from './cz/hero'

const messages = {
  en: {
    navbar: navbarEn,
    hero: heroEn,
  },
  cz: {
    navbar: navbarCz,
    hero: heroCz,
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
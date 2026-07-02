import { createI18n } from 'vue-i18n'
import navbarCz from './cz/navbar'
import navbarEn from './en/navbar'

import heroEn from './en/hero'
import heroCz from './cz/hero'

import aboutEn from './en/about'
import aboutCz from './cz/about'

const messages = {
  en: {
    navbar: navbarEn,
    hero: heroEn,
    about: aboutEn,
  },
  cz: {
    navbar: navbarCz,
    hero: heroCz,
    about: aboutCz,
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
import { createI18n } from 'vue-i18n'
import navbarCz from './cz/navbar'
import navbarEn from './en/navbar'

import heroEn from './en/hero'
import heroCz from './cz/hero'

import aboutEn from './en/about'
import aboutCz from './cz/about'

import portfolioEn from './en/portfolio'
import portfolioCz from './cz/portfolio'

import AkrmatProjectEn from './en/projects/Akrmat'
import AkrmatProjectCz from './cz/projects/Akrmat'

import ScraperProjectEn from './en/projects/Scraper'
import ScraperProjectCz from './cz/projects/Scraper'

import AsciiArtEn from './en/projects/AsciiArt'
import AsciiArtCz from './cz/projects/AsciiArt'

const messages = {
  en: {
    navbar: navbarEn,
    hero: heroEn,
    about: aboutEn,
    portfolio: portfolioEn,
    akrmat: AkrmatProjectEn,
    scraper: ScraperProjectEn,
    asciiArt: AsciiArtEn,
  },
  cz: {
    navbar: navbarCz,
    hero: heroCz,
    about: aboutCz,
    portfolio: portfolioCz,
    akrmat: AkrmatProjectCz,
    scraper: ScraperProjectCz,
    asciiArt: AsciiArtCz,
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
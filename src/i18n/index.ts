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

import TetrisEn from './en/projects/Tetris'
import TetrisCz from './cz/projects/Tetris'

import CarRentEn from './en/projects/CarRent'
import CarRentCz from './cz/projects/CarRent'

import CollaborativeFilteringEn from './en/projects/CollaborativeFiltering'
import CollaborativeFilteringCz from './cz/projects/CollaborativeFiltering'

import AdvancedSqlEn from './en/projects/AdvancedSql'
import AdvancedSqlCz from './cz/projects/AdvancedSql'

import AIProjectsEn from './en/projects/AIProjects'
import AIProjectsCz from './cz/projects/AIProjects'

import ConceptualModelingEn from './en/projects/ConceptualModeling'
import ConceptualModelingCz from './cz/projects/ConceptualModeling'

import ExcelEngineEn from './en/projects/ExcelEngine'
import ExcelEngineCz from './cz/projects/ExcelEngine'

import OperatingSystemsEn from './en/projects/OperatingSystems'
import OperatingSystemsCz from './cz/projects/OperatingSystems'

const messages = {
  en: {
    navbar: navbarEn,
    hero: heroEn,
    about: aboutEn,
    portfolio: portfolioEn,
    akrmat: AkrmatProjectEn,
    scraper: ScraperProjectEn,
    asciiArt: AsciiArtEn,
    tetris: TetrisEn,
    car: CarRentEn,
    cf: CollaborativeFilteringEn,
    sql: AdvancedSqlEn,
    ai: AIProjectsEn,
    kom: ConceptualModelingEn,
    excel: ExcelEngineEn,
    os: OperatingSystemsEn,
  },
  cz: {
    navbar: navbarCz,
    hero: heroCz,
    about: aboutCz,
    portfolio: portfolioCz,
    akrmat: AkrmatProjectCz,
    scraper: ScraperProjectCz,
    asciiArt: AsciiArtCz,
    tetris: TetrisCz,
    car: CarRentCz,
    cf: CollaborativeFilteringCz,
    sql: AdvancedSqlCz,
    ai: AIProjectsCz,
    kom: ConceptualModelingCz,
    excel: ExcelEngineCz,
    os: OperatingSystemsCz,
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-xhr-backend'

const backendOpts = {
  loadPath: 'locales/{{lng}}/{{ns}}.json'
}

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: 'ja',
    fallbackLng: 'en',
    load: 'languageOnly',
    backend: backendOpts,
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  })

export default i18n

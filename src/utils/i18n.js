import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json'; // Import your translation files
import esTranslation from './locales/es.json';

i18n
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    fallbackLng: 'en', // Default language if user's preferred language is not supported
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;

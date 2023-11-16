// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // English translations
        },
      },
      es: {
        translation: {
          // Spanish translations
        },
      },
      fr: {
        translation: {
          // French translations
        },
      },
      de: {
        translation: {
          // German translations
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

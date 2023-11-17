import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  // Add your configuration options here
  resources: {
    en: {
      translation: {
        // English translations here
      },
    },
    // Add translations for other languages as needed
  },
  fallbackLng: 'en',
  debug: true,
});

export default i18n;

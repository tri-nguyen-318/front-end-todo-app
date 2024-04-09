import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enResource from '@/languages/resources/en.json';
import viResource from '@/languages/resources/vi.json';

i18n.use(initReactI18next).init({
  resources: {
    en: enResource,
    vi: viResource
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    escapeValue: false
  }
});

export default i18n;

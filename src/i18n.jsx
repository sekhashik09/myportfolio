// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files for each language
import translationEN from './locales/en/translation.json';
import translationBHO from './locales/bho/translation.json';
import translationHI from './locales/hi/translation.json';
import translationAS from './locales/as/translation.json';
import translationBN from './locales/bn/translation.json';
import translationUR from './locales/ur/translation.json';
import translationTA from './locales/ta/translation.json';
import translationTE from './locales/te/translation.json';
import translationOD from './locales/od/translation.json';
import translationGU from './locales/gu/translation.json';  
import translationMR from './locales/mr/translation.json';  
import translationPA from './locales/pa/translation.json';  
import translationKN from './locales/kn/translation.json';  
import translationML from './locales/ml/translation.json';  
import translationSL from './locales/si/translation.json'; 
import translationNE from './locales/ne/translation.json'; 




i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en", // default language
    resources: {
      en: { translation: translationEN },
      bho: { translation: translationBHO },
      hi: { translation: translationHI },
      bn: { translation: translationBN },
      ur: { translation: translationUR },
      ta: { translation: translationTA },
      te: { translation: translationTE },
      od: { translation: translationOD },
      gu: { translation: translationGU },
      mr: { translation: translationMR },
      pa: { translation: translationPA },
      kn: { translation: translationKN },
      ml: { translation: translationML },
      as: { translation: translationAS },
      ne: { translation: translationNE },
      si: { translation: translationSL },



    },
  });

export default i18n;

import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
// import {useTranslation } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use (HttpApi)
  .init({
    supportedLngs:['en','ar', 'hr'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage'],
      caches:['cookie']
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false}
  });
  



// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//     resources: {
//       en: {
//         translation: {
//           "Welcome to React": "Welcome to React and react-i18next"
//         }
//       }
//     },
//     lng: "en", // if you're using a language detector, do not define the lng option
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//     }
//   });

// function App() {
//   const { t } = useTranslation();
//   return <h2>{t('Main.big-title')}</h2>;
// }
// export default App



import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "./src/locales/en.json";
import pt from "./src/locales/pt.json";

const resources = { en: { translation: en }, pt: { translation: pt } };

const getDeviceLanguage = () => {
  const locales = RNLocalize.getLocales();
  return locales[0]?.languageCode || "en";
};

const loadLanguage = async () => {
  const savedLanguage = await AsyncStorage.getItem("language");
  return savedLanguage || getDeviceLanguage();
};

loadLanguage().then((language) => {
  i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: "en", 
    interpolation: { escapeValue: false }, 
  });
});

export default i18n;

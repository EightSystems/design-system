import { getLocales } from "react-native-localize";

export default function getUserLanguage(defaultLanguage = "pt-BR") {
    const deviceLocale = getLocales();
    return deviceLocale[0] || defaultLanguage;
}

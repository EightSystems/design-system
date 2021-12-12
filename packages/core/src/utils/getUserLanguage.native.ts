let getLocales = null;
try {
    getLocales = require("react-native-localize").getLocales;
} catch (e) {}

export default function getUserLanguage(defaultLanguage = "pt-BR") {
    if (!getLocales) {
        console.error(
            "You don't have the react-native-localize package installed, returning the defaultLanguage parameter"
        );
        return defaultLanguage;
    }

    const deviceLocale = getLocales ? getLocales() : [defaultLanguage];
    return deviceLocale[0] || defaultLanguage;
}

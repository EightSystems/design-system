export default function getUserLanguage(defaultLanguage = "pt-BR") {
    return typeof navigator != "undefined"
        ? (navigator.languages && navigator.languages[0]) ||
              navigator.language ||
              navigator.userLanguage ||
              defaultLanguage
        : defaultLanguage;
}

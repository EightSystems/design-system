export default function getUserLanguage(defaultLanguage = "pt-BR") {
    return typeof navigator != "undefined"
        ? (navigator.languages && navigator.languages[0]) ||
              navigator.language ||
              (navigator as any).userLanguage ||
              defaultLanguage
        : defaultLanguage;
}

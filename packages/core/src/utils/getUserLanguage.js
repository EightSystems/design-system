export default function getUserLanguage(defaultLanguage = "pt-BR") {
    return (
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage ||
        defaultLanguage
    );
}

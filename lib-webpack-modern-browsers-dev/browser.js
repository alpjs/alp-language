/* global navigator */
export default function alpLanguage(app) {
    var config = app.context.config;
    var availableLanguages = config.get('availableLanguages');
    if (!availableLanguages) {
        throw new Error('Missing config "availableLanguages"');
    }

    app.context.firstAcceptedLanguage = navigator.languages[0] || availableLanguages[0];

    if (!navigator.languages.some(language => {
        var languageCode = language.split('-')[0].toLowerCase();
        if (availableLanguages.indexOf(languageCode) !== -1) {
            app.context.language = languageCode;
            return true;
        }

        return false;
    })) {
        app.context.language = availableLanguages[0];
    }
}
//# sourceMappingURL=browser.js.map
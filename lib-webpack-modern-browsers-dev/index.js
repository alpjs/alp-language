import { defineLazyProperty } from 'object-properties';

export default function alpLanguage(app) {
    var config = app.context.config;
    var availableLanguages = config.get('availableLanguages');
    if (!availableLanguages) {
        throw new Error('Missing config "availableLanguages"');
    }

    defineLazyProperty(app.context, 'language', function () {
        return this.acceptsLanguages(availableLanguages);
    });
}
//# sourceMappingURL=index.js.map
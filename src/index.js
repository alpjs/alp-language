import { defineLazyProperty } from 'object-properties/src';

export default function alpLanguage(app) {
  const config = app.context.config;
  const availableLanguages: Array<string> = config.get('availableLanguages');
  if (!availableLanguages) {
    throw new Error('Missing config "availableLanguages"');
  }

  defineLazyProperty(app.context, 'language', function() {
    return this.acceptsLanguages(availableLanguages);
  });

  defineLazyProperty(app.context, 'firstAcceptedLanguage', function() {
    return this.acceptsLanguages()[0] || availableLanguages[0];
  });
}

/** Application language. */
export const LANGUAGE = 'ru';

/** Internationalization parameters. */
export const I18_PARAMETERS = {
    backend: {
        loadPath: `./i18next/${LANGUAGE}/{{ns}}.json`,
    },
    debug: true,
    defaultNS: 'common',
    ns: ['common'],
};

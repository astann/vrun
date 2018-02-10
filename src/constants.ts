/** Application language. */
export const LANGUAGE = 'ru';

/** Internationalization parameters. */
export const I18_PARAMETERS = {
    backend: {
        loadPath: `./i18next/${LANGUAGE}/{{ns}}.json`,
    },
    compatibilityJSON: 'v2',
    contextSeparator: '#',
    debug: true,
    defaultNS: 'common',
    keySeparator: '.',
    lng: LANGUAGE,
    ns: ['common'],
    nsSeparator: ':',
    pluralSeparator: '-',
};

/** Default length of question and voting phases in seconds. */
export const DEFAULT_PHASE_LENGTH_SECONDS = 30;

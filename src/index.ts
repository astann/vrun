import * as i18n from 'i18next';
import * as i18nextFSBackend from 'i18next-node-fs-backend';

import {Application} from './classes/Application';
import {I18_PARAMETERS} from './constants';

/** Starting execution. */
if (!process.env.TOKEN) {
    console.log(i18n.t('noTokenError'));
} else {
    const application = new Application();

    i18n
        .use(i18nextFSBackend)
        .init(I18_PARAMETERS, () => {
            application.start();
        });
}

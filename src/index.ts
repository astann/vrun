import * as http from 'http';
import * as i18n from 'i18next';
import * as i18nextFSBackend from 'i18next-node-fs-backend';

import {Application} from './classes/Application';
import {I18_PARAMETERS} from './constants';

/** Starting execution. */
i18n
    .use(i18nextFSBackend)
    .init(I18_PARAMETERS, () => {
        if (!process.env.TOKEN) {
            console.log(i18n.t('noTokenError'));
        } else {
            const application = new Application();

            application.start();
        }
    });

/** Listening to the port so Heroku does not stop the application */
const server = http.createServer((request, response) => {
    console.log(request.url);
});

server.listen(process.env.PORT || 3000);

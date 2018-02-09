import * as i18n from 'i18next';

import {telegraf} from '../botApi';
import {
    joinHandler,
    startHandler,
    stopHandler,
    whoHandler,
} from '../chatHandlers';

/**
 * Main application.
 */
export class Application {
    /**
     * Start main application loop.
     */
    public start = () => {
        console.log(i18n.t('system.start'));

        /** Handling the /start command. Welcome message and basic commands list. */
        telegraf.start(startHandler);
        /** Handling the /join command. Add the player to a room. */
        telegraf.command('join', joinHandler);
        /** Handling the /who command. List of players. */
        telegraf.command('who', whoHandler);
        /** Handling the /stop command. Reset the state. */
        telegraf.command('stop', stopHandler);

        telegraf.startPolling();
    }
}

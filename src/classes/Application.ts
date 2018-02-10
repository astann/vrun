import * as i18n from 'i18next';

import {telegraf} from '../botApi';
import {
    joinHandler,
    roundHandler,
    startHandler,
    stopHandler,
    whoHandler,
} from '../chatHandlers';
import {dispatch} from '../state';
import {Question} from './Question';

/**
 * Main application.
 */
export class Application {
    /**
     * Start main application loop.
     */
    public start = () => {
        console.log(i18n.t('system.start'));

        // TODO: Move to room creation or leave this here, but add questionsCount
        // to the getQuestion in the questions api to update the number.
        Question.getQuestionsCount().then((questionsCount) => {
            dispatch({
                payload: {questionsCount},
                // TODO: Action type Enum.
                type: 'UPDATE_QUESTIONS_COUNT',
            });
        });

        /** Handling the /start command. Welcome message and basic commands list. */
        telegraf.start(startHandler);
        /** Handling the /join command. Add the player to a room. */
        telegraf.command('join', joinHandler);
        /** Handling the /who command. List of players. */
        telegraf.command('who', whoHandler);
        /** Handling the /stop command. Reset the state. */
        telegraf.command('stop', stopHandler);
        /** Handling the /round command. Start a round. */
        telegraf.command('round', roundHandler);

        telegraf.startPolling();
    }
}

import * as i18n from 'i18next';

import {Round} from '../classes/Round';
import {getState} from '../state';

/**
 * /round command handler.
 *
 * @param {any} context Telegraf API context.
 */
export const roundHandler = (context) => {
    // TODO Stop players from starting multiple simultaneous rounds.
    const {players} = getState();

    if (players.length === 0) {
        context.reply(i18n.t('noPlayers'));
        return;
    }

    const roundLengthSeconds = context.message.text.split(' ')[1];
    const round = new Round(roundLengthSeconds);

    round.start();
};

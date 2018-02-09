import * as i18n from 'i18next';

import {getState} from '../state';

/**
 * /who command handler.
 */
export const whoHandler = () => (context) => {
    const {players} = getState();

    const playerNames = players.map((player, index) => {
        return i18n.t('playerNameTemplate', {
            firstName: player.first_name,
            lastName: player.last_name,
            number: index + 1,
        });
    });

    if (playerNames && playerNames.length > 0) {
        context.reply(i18n.t('playerNames', {playerNames}));
    } else {
        context.reply(i18n.t('noPlayers'));
    }
};

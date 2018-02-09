import * as i18n from 'i18next';

import {whoHandler} from '../chatHandlers';
import {dispatch, getState} from '../state';
import {sendMessageTo} from '../utils';

/**
 * /join command handler.
 *
 * @param {any} context Telegraf API context.
 */
export const joinHandler = (context) => {
    let players = [...getState().players];

    if (!players.find((player) => player.id === context.from.id)) {
        players.push(context.from);

        dispatch({
            payload: players,
            // TODO: Action type constants.
            type: 'UPDATE_PLAYERS',
        });

        sendMessageTo(
            players.map((player) => player.id.toString()),
            i18n.t('joinMessage', {name: context.from.first_name}),
        );
        whoHandler(context);
    } else {
        context.reply(i18n.t('joinError'));
    }
};

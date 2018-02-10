import axios from 'axios';
import * as i18n from 'i18next';

import {telegram} from './botApi';

/**
 * Send a message to an array of players.
 *
 * @param {string[]} playerIds Players' IDs.
 * @param {string} message Message to send.
 */
export const sendMessageTo = (playerIds: string[], message: string) => {
    playerIds.forEach((playerId) => {
        telegram.sendMessage(playerId, message, {
            parse_mode: 'HTML',
        });
    });
};

/**
 * Send a get request.
 *
 * @param {string} url Request URL.
 */
export const get = (url: string) => {
    console.log(i18n.t('system.getRequest.send', {url}));

    return axios.get(url)
        .then((response) => {
            console.log(i18n.t('system.getRequest.success', {
                data: JSON.stringify(response.data),
                status: response.status,
                url,
            }));

            return response.data;
        })
        .catch((error) => {
            console.log(i18n.t('system.getRequest.error', {error}));
        });
};

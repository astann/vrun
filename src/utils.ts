import {telegram} from './botApi';

/**
 * Send a message to an array of players.
 *
 * @param {string[]} playerIds Players' IDs.
 * @param {string} message Message to send.
 */
export const sendMessageTo = (playerIds: string[], message: string) => {
    playerIds.forEach((playerId) => {
        telegram.sendMessage(playerId, message);
    });
};

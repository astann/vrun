/**
 * Send a message to an array of players.
 *
 * @param {string[]} playerIds Players' IDs.
 * @param {string} message Message to send.
 * @param {any} telegram Telegram API.
 */
export const sendMessageTo = (playerIds: string[], message: string, telegram) => {
    playerIds.forEach((playerId) => {
        telegram.sendMessage(playerId, message);
    });
};

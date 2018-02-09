/**
 * Player interface
 *
 * @prop {number} id Player's ID.
 * @prop {boolean} is_bot Is the player a bot.
 * @prop {string} first_name Player's first name.
 * @prop {string} last_name Player's last name.
 * @prop {string} username Player's username.
 * @prop {string} language_code Player's client language.
 */
export interface IPlayer {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
}

/**
 * Global apllication state.
 *
 * @prop {IPlayer[]} players List of players.
 */
export interface IApplicationState {
    players: IPlayer[];
}

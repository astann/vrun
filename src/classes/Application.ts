import * as i18n from 'i18next';
import * as Telegraf from 'telegraf';
import * as Telegram from 'telegraf/telegram';

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
    /** Telegram chat bot token. */
    private token = process.env.TOKEN;
    /** Telegraf chat bot API. */
    private bot = new Telegraf(this.token);
    /** Telegram chat bot API. */
    private telegramBot = new Telegram(this.token);

    /**
     * Start main application loop.
     */
    public start = () => {
        const {bot, telegramBot} = this;

        console.log(i18n.t('system.start'));

        /** Handling the /start command. Welcome message and basic commands list. */
        bot.start(startHandler);
        /** Handling the /join command. Add the player to a room. */
        bot.command('join', joinHandler(telegramBot));
        /** Handling the /who command. List of players. */
        bot.command('who', whoHandler());
        /** Handling the /stop command. Reset the state. */
        bot.command('stop', stopHandler);

        bot.startPolling();
    }
}

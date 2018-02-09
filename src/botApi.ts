import * as Telegraf from 'telegraf';
import * as Telegram from 'telegraf/telegram';

/** Telegram chat bot token. */
const token = process.env.TOKEN;
/** Telegraf chat bot API. */
export const telegraf = new Telegraf(token);
/** Telegram chat bot API. */
export const telegram = new Telegram(token);

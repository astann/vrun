import * as i18n from 'i18next';
import * as Markup from 'telegraf/markup';

/**
 * /start command handler.
 *
 * @param {any} context Telegram context.
 */
export const startHandler = (context) => {
    const keyboard = Markup
        .keyboard([i18n.t('actions.join'), i18n.t('actions.who')])
        .oneTime()
        .resize()
        .extra();

    return context.reply(i18n.t('welcomeMessage'), keyboard);
};

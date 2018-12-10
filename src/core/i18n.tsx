import { addLocaleData } from 'react-intl';
import * as itLocaleData from 'react-intl/locale-data/it';
import itTranslationMessages from 'src/translations/it.json';
import { DEFAULT_LOCALE } from 'src/config';


addLocaleData(itLocaleData);

interface I18nMessages {
    [k: string]: string
}

export interface TranslationMessages {
    [k: string]: I18nMessages
}

export const formatTranslationMessages = (locale: string, messages: I18nMessages): I18nMessages => {
    const defaultFormattedMessages =
        locale !== DEFAULT_LOCALE
            ? formatTranslationMessages(DEFAULT_LOCALE, itTranslationMessages)
            : {};
    const flattenFormattedMessages = (formattedMessages: I18nMessages, key: string) => {
        const formattedMessage =
            !messages[key] && locale !== DEFAULT_LOCALE
                ? defaultFormattedMessages[key]
                : messages[key];
        return Object.assign(formattedMessages, { [key]: formattedMessage });
    };
    return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages: TranslationMessages = {
    it: formatTranslationMessages('it', itTranslationMessages)
};

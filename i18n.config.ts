interface I18nConfig {
    defaultLocale: string;
    locales: string[];
}

export const i18n: I18nConfig = {
    defaultLocale: 'ro',
    locales: ["de", "en", "fr", "hu", "ro"]
};
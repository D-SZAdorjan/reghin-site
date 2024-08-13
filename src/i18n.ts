import "server-only";

import { createIntl } from "@formatjs/intl";

export async function getIntl(locale: string) {
  return createIntl({
    locale: locale,
    messages: (await import(`./lang/${locale}.json`)).default,
  });
}

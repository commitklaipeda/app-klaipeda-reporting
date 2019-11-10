// @flow
import moment from 'moment';
import 'moment/locale/lt';
import i18n from 'i18n-js';
import lt from 'locales/lt.json';

i18n.defaultLocale = 'lt';
i18n.locale = 'lt';
// enable fallback when 2 languages available
// i18n.fallbacks = true;
i18n.translations = { lt };
moment.locale('lt');

export default i18n;

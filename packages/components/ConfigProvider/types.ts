import type { Language, TranslatePair } from '@salmon-element/locale';

export interface ConfigProviderProps {
	locale?: Language;
	extendsI18nMsg?: TranslatePair;
}

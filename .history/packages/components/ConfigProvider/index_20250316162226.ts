import ConfigProvider from './ConfigProvider.vue';
import { withInstall } from '@salmon-element/utils';

export const YisConfigProvider = withInstall(ConfigProvider);

export * from './types';
export * from './hooks';

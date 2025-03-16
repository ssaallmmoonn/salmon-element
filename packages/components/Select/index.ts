import Select from './Select.vue';
import Option from './Option.vue';

import { withInstall } from '@salmon-element/utils';

export const YisSelect = withInstall(Select);
export const YisOption = withInstall(Option);

console.log('Select', Select, 'Option', Option);

export * from './types';

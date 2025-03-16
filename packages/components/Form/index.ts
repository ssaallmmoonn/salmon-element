import Form from './Form.vue';
import FormItem from './FormItem.vue';

import { withInstall } from '@salmon-element/utils';

export const YisForm = withInstall(Form);
export const YisFormItem = withInstall(FormItem);

export * from './types';
export * from './hooks';

import Form from './Form.vue';
import FormItem from './FormItem.vue';

import { withInstall } from '@salmon-element/utils';

export const Form = withInstall(Form);
export const FormItem = withInstall(FormItem);

export * from './types';
export * from './hooks';

import Message from './methods';
import { withInstallFunction } from '@salmon-element/utils';

export const YisMessage = withInstallFunction(Message, '$message');

export * from './types';

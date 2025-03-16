import Message from './methods';
import { withInstallFunction } from '@salmon-element/utils';

export const ErMessage = withInstallFunction(Message, '$message');

export * from './types';

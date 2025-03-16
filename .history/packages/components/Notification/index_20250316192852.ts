import Notification from './methods';
import { withInstallFunction } from '@salmon-element/utils';

export const YisNotification = withInstallFunction(Notification, '$notify');

export * from './types';

import Notification from './methods';
import { withInstallFunction } from '@toy-element/utils';

export const YisNotification = withInstallFunction(Notification, '$notify');

export * from './types';

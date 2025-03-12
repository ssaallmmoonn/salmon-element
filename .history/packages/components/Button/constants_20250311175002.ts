import type { InjectionKey } from 'vue';
import type { ButtonGroupContext } from './types';

// 依赖注入相关
export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> = Symbol('buttonGroupContext');

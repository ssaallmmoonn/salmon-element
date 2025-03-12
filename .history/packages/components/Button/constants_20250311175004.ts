import type { InjectionKey } from 'vue';
import type { ButtonGroupContext } from './types';

// 依赖注入相关的 key
export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> = Symbol('buttonGroupContext');

import type { InjectionKey } from 'vue';
import type { CollapseContext } from './types';

// 依赖注入相关的key
export const CO: InjectionKey<CollapseContext> = Symbol('collapseKey');
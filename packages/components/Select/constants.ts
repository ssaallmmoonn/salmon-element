import type { InjectionKey } from 'vue';
import type { SelectContext } from './types';

export const SELECT_CTX_KEY: InjectionKey<SelectContext> = Symbol('selectContext');

export const POPPER_OPTIONS: any = {
	modifiers: [
		{
			name: 'offset',
			options: {
				offset: [0, 9], // [水平偏移, 垂直偏移]
			},
		},
		{
			name: 'sameWidth', // 修饰符名称
			enabled: true, // 启用状态
			phase: 'beforeWrite', // 执行阶段，确保在将 Popper 的样式应用到 DOM 之前
			requires: ['computeStyles'], // 依赖的其他修饰符，需要访问 state.rects.reference.width，这是由 computeStyles 修饰符计算出来的
			fn: ({ state }: { state: any }) => {
				// 设置弹出层宽度等于触发元素宽度
				state.styles.popper.width = `${state.rects.reference.width}px`;
			},
		},
	],
} as const;

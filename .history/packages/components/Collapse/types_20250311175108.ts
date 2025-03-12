import type { Ref } from 'vue';
export type CollapseItemName = string | number;

export interface CollapseProps {
	modelValue: CollapseItemName[];
	accordion?: boolean;
}

export interface CollapseItemProps {
	name: CollapseItemName;
	title?: string;
	disabled?: boolean;
}

export interface CollapseContext {
	// 有哪些折叠面板属于展开状态，将他们的names存储在数组中
	activeNames: Ref<CollapseItemName[]>;
	handleItemClick(name: CollapseItemName): void;
}

export interface CollapseEmits {
	(e: 'update:modelValue', value: CollapseItemName[]): void;
	(e: 'change', value: CollapseItemName[]): void;
}

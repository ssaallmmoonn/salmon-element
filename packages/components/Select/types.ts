import type { VNode, ComputedRef } from 'vue';

export type RenderLabelFunc = (option: SelectOptionProps) => VNode | string;
export type CustomFilterFunc = (value: string) => SelectOptionProps[];
export type CustomFilterRemoteFunc = (value: string) => Promise<SelectOptionProps[] | void>;

export interface SelectOptionProps {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SelectProps {
	modelValue: string; // input标签里绑定得值
	id?: string;
	options?: SelectOptionProps[]; // 可选项数组
	placeholder?: string;
	disabled?: boolean;
	clearable?: boolean;
	renderLabel?: RenderLabelFunc; // 自定义渲染函数
	filterable?: boolean; // 是否可搜索，为 true 时可输入关键字过滤选项
	filterMethod?: CustomFilterFunc; // 自定义过滤方法
	remote?: boolean; // 是否为远程搜索
	remoteMethod?: CustomFilterRemoteFunc; // 远程搜索方法
}

export interface SelectStates {
	inputValue: string;
	selectedOption: SelectOptionProps | void | null;
	mouseHover: boolean;
	loading: boolean;
	highlightedIndex: number;
}

export interface SelectEmits {
	(e: 'update:modelValue', value: string): void;
	(e: 'change', value: string): void;
	(e: 'visible-change', vlaue: boolean): void;

	(e: 'clear'): void;
	(e: 'focus'): void;
	(e: 'blur'): void;
}

export interface SelectContext {
	selectStates: SelectStates;
	renderLabel?: RenderLabelFunc;
	highlightedLine?: ComputedRef<SelectOptionProps | void>;
	handleSelect(item: SelectOptionProps): void;
}

export interface SelectInstance {
	focus(): void;
	blur(): void;
}

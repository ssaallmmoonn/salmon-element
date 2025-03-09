import type { Component } from 'vue';


export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type NativeType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps {
	tag?: string | Component;
	type?: ButtonType;
	size?: ButtonSize;
	nativeType?: NativeType;
	disabled?: boolean;
	loading?: boolean;
	icon?: string;
	circle?: boolean;
	plain?: boolean;
	round?: boolean;
	loadingIcon?: string;
	autofocus?: boolean;
	useThrottle?: boolean;
	throttleDuration?: number;
}

export interface ButtonEmits {
	// (click: MouseEvent): void;
	(e: 'click', val: MouseEvent): void;
}

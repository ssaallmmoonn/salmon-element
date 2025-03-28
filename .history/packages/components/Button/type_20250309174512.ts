export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type NativeType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps {
	tag?: string | Com;
	type?: ButtonType;
	size?: ButtonSize;
	plain?: boolean;
	round?: boolean;
	circle?: boolean;
	disabled?: boolean;
	loading?: boolean;
	nativeType?: NativeType;
}
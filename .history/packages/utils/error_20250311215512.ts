import { isString } from 'lodash-es';

class YisUIError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'YisUIError';
	}
}

export function throwError(scope: string, msg: string) {
	throw new YisUIError(`[${scope}]:${msg}`);
}

// ts里的函数重载，有3种情况
export function debugWarn(error: Error): void;
export function debugWarn(scope: string, msg: string): void;
export function debugWarn(scope: string | Error, msg?: string) {
	if (process.env.NODE_ENV !== 'production') {
		const err = isString(scope) ? new YisUIError(`[${scope}] ${msg}`) : scope;
		console.warn(err);
	}
}

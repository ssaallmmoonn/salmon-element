import { isString } from 'lodash-es';

class YisUIError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'YisUIError';
	}
}

function createYisUIError(scope: string, msg: string) {
	return new YisUIError(`[${scope}]:${msg}`);
}

export function throwError(scope: string, msg: string) {
	throw createYisUIError(scope, msg);
}

// ts里的函数重载，有3种情况
// 重载1：直接传入 Error 对象
export function debugWarn(error: Error): void;
// 重载2：传入 scope 和 msg
export function debugWarn(scope: string, msg: string): void;
// 重载3：实现函数（这是具体实现，不是真正的重载）
export function debugWarn(scope: string | Error, msg?: string) {
	if (process.env.NODE_ENV !== 'production') {
		const err = isString(scope) ? createYisUIError(scope, msg!) : scope;
		console.warn(err);
	}
}

import { FORM_CTX_KEY, FORM_ITEM_CTX_KEY } from './constants';
import {
	computed,
	inject,
	onMounted,
	onUnmounted,
	ref,
	toRef,
	unref,
	watch,
	type MaybeRef,
	type WatchStopHandle,
} from 'vue';
import { useId, useProp } from '@salmon-element/hooks';
import type { FormItemContext } from './types';

export function useFormItem() {
	const form = inject(FORM_CTX_KEY, void 0);
	const formItem = inject(FORM_ITEM_CTX_KEY, void 0);
	return { form, formItem };
}

export function useFormDisabled(fallback?: MaybeRef<boolean | void>) {
	const disabled = useProp<boolean>('disabled');
	const form = inject(FORM_CTX_KEY, void 0);
	const formItem = inject(FORM_ITEM_CTX_KEY, void 0);
	return computed(
		() => disabled.value || unref(fallback) || form?.disabled || formItem?.disabled || false
	);
}

interface UseFormItemInputCommenProps extends Record<string, any> {
	id?: string;
}

export function useFormItemInputId(
	props: UseFormItemInputCommenProps,
	formItemContext?: FormItemContext
) {
	const inputId = ref<string>(''); // 存储当前输入元素的唯一 ID
	let unwatch: WatchStopHandle | void; // 用于存储 watch 的停止函数

	onMounted(() => {
		unwatch = watch(
			toRef(() => props.id), // 监听 props.id 的变化
			id => {
				const newId = id ?? useId().value; // 如果 props.id 存在，使用它；否则生成一个唯一 ID
				if (newId !== inputId.value) {
					// 如果新 ID 与当前 ID 不同
					inputId.value && formItemContext?.removeInputId(inputId.value); // 从上下文中移除旧 ID
					formItemContext?.addInputId(newId); // 将新 ID 添加到上下文中
					inputId.value = newId; // 更新 inputId 的值
				}
			},
			{
				immediate: true, // 立即执行回调
			}
		);
	});

	onUnmounted(() => {
		unwatch && unwatch(); // 停止监听
		inputId.value && formItemContext?.removeInputId(inputId.value); // 从上下文中移除当前 ID
	});

	return {
		inputId, // 返回响应式的 inputId
	};
}

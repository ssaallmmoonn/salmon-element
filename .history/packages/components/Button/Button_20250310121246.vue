<script setup lang="ts">
	import { ref, computed } from 'vue';
	import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
	import { throttle } from 'lodash-es';
	import YisIcon from '../Icon/Icon.vue';

	defineOptions({
		name: 'YisButton',
	});

	const props = withDefaults(defineProps<ButtonProps>(), {
		tag: 'button',
		nativeType: 'button',
		useThrottle: true,
		throttleDuration: 500,
	});

	const emits = defineEmits<ButtonEmits>();

	const slots = defineSlots();

	const _ref = ref<HTMLButtonElement>();

	// 服务于单个图标的圆形组件
	const iconStyle = computed(() => {
		marginRight: slots.default ? '6px' : 0;
	});

	const handlerBtnClick = (e: MouseEvent) => emits('click', e);

	const handlerBtnClickThrottle = throttle(handlerBtnClick, props.throttleDuration);

	defineExpose<ButtonInstance>({
		ref: _ref,
	});
</script>

<template>
	<component
		ref="_ref"
		class="yis-button"
		:is="tag"
		:autofocus="autofocus"
		:type="tag === 'button' ? nativeType : void 0"
		:diabled="disabled || loading ? true : void 0"
		:class="{
			[`yis-button--${type}`]: type,
			[`yis-button--${size}`]: size,
			'is-plain': plain,
			'is-round': round,
			'is-circle': circle,
			'is-disabled': disabled,
			'is-loading': loading,
		}"
		@click="(e:MouseEvent) => useThrottle ? handlerBtnClickThrottle(e) : handlerBtnClick"
	>
		<!-- loading图标 -->
		<template v-if="loading">
			<slot name="loading">
				<yis-icon
					class="loading-icon"
					:icon="loadingIcon ?? 'spinner'"
					:style="iconStyle"
					spin
				></yis-icon>
			</slot>
		</template>
		<yis-icon v-if="icon && !loading"></yis-icon>
		<slot></slot>
	</component>
</template>

<style lang="css" scoped>
	@import './style.css';
</style>

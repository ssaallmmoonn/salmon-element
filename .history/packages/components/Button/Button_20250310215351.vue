<script setup lang="ts">
	import { ref, computed, inject } from 'vue';
	import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
	import { throttle } from 'lodash-es';
	import YisIcon from '../Icon/Icon.vue';
	import { BUTTON_GROUP_CTX_KEY } from './constants';

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

// 如果是button-group的子组件，从上下文中获取属性（改造一些已经有的属性）
	// 先取到上下文ctx（context的缩写—
	const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);

	// 服务于单个图标的圆形组件
	const iconStyle = computed(() => {
		marginRight: slots.default ? '6px' : 0;
	});

	const handlerBtnClick = (e: MouseEvent) => emits('click', e);

	const handlerBtnClickThrottle = throttle(handlerBtnClick, props.throttleDuration, {
		trailing: false,
	});

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
		:disabled="disabled || loading ? true : void 0"
		:class="{
			[`yis-button--${type}`]: type,
			[`yis-button--${size}`]: size,
			'is-plain': plain,
			'is-round': round,
			'is-circle': circle,
			'is-disabled': disabled,
			'is-loading': loading,
		}"
		@click="(e:MouseEvent) => useThrottle ? handlerBtnClickThrottle(e) : handlerBtnClick(e)"
	>
		<!-- loading图标 -->
		<template v-if="loading">
			<slot name="loading">
				<yis-icon
					class="loading-icon"
					:icon="loadingIcon ?? 'spinner'"
					:style="iconStyle"
					size="1x"
					spin
				></yis-icon>
			</slot>
		</template>
		<yis-icon v-if="icon && !loading" :icon="icon" size="1x" :style="iconStyle"></yis-icon>
		<slot></slot>
	</component>
</template>

<style lang="css" scoped>
	@import './style.css';
</style>

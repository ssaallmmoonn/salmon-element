<script setup lang="ts">
	import { ref } from 'vue';
	import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
	defineOptions({
		name: 'YisButton',
	});

	const props = withDefaults(defineProps<ButtonProps>(), {
		tag: 'button',
		nativeType: 'button',
	});

	const emit = defineEmits<ButtonEmits>();

	const slots = defineSlots();

	const _ref = ref<HTMLButtonElement>();
</script>

<template>
	<component
		:is="tag"
		ref="_ref"
		:type="tag === 'button' ? nativeType : void 0"
		:diabled="disabled || loading ? true : void 0"
		class="yis-button"
		:class="{
			[`yis-button--${type}`]: type,
			[`yis-button--${size}`]: size,
			'is-plain': plain,
			'is-round': round,
			'is-circle': circle,
			'is-disabled': disabled,
			'is-loading': loading,
		}">
		<slot></slot>
	</component>
</template>

<style lang="css" scoped>
	@import './style.css';
</style>

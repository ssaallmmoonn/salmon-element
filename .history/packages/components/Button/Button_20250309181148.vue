<script setup lang="ts">
	import { ref } from 'vue';
	import type { ButtonProps } from './types';
	defineOptions({
		name: 'YisButton',
	});

	const props = withDefaults(defineProps<ButtonProps>(), {
		tag: 'button',
		nativeType: 'button',
	});

	const slots = defineSlots();

	const _ref = ref<HTMLButtonElement>();
</script>

<template>
	<component
		:is="tag"
		ref="_ref"
		:type="tag === 'button' ? nativeType : void 0"
		:diabled="disabled"
		class="yis-button"
		:class="{
			[`yis-button--${type}`]: type,
			[`yis-button--${size}`]: size,
			'is-plain': plain,
	'is-round': round,
			'is'
		}"></component>
</template>

<style lang="css" scoped></style>

<script setup lang="ts">
	import type { ButtonProps } from './types';
	defineOptions({
		name: 'YisButton',
	});

	const props = withDefaults(defineProps<ButtonProps>(), {
		tag: 'button',
		nativeType: 'button',
	});

const slots = defineSlots();

	const _ref
</script>

<template>
	<button style="background-color: skyblue; color: red">this is a Button</button>
</template>

<style lang="css" scoped></style>

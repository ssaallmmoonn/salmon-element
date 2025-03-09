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

const _ref = ref<HTMLButtonElement>();
</script>

<template>
</template>

<style lang="css" scoped></style>

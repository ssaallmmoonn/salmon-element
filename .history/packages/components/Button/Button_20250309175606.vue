<script setup lang="ts">
	import type { ButtonProps } from './types';
	defineOptions({
		name: 'YisButton',
	});
	const props = withDefaults(defineProps<ButtonProps>()), {
	};
</script>

<template>
	<button style="background-color: skyblue; color: red">this is a Button</button>
</template>

<style lang="css" scoped></style>

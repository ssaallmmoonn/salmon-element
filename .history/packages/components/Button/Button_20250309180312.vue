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
	<component
		:is="props.tag"
		:type="props.nativeType"
		:class="['yis-button', props.type]"
		:diabled="props.disabled"
		:ref="_ref"></component>
</template>

<style lang="css" scoped></style>

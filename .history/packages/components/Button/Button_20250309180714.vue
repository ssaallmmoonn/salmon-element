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
		:is="props.tag"
		ref="_ref"
		:type="tag === 'button' ? nativeType : void 0"
		:diabled="disabled"
		class=""
		:class="['yis-button', type]"></component>
</template>

<style lang="css" scoped></style>

<script setup lang="ts">
import type { CollapseProps, CollapseEmits, CollapseItemName } from './types';
import { provide, ref, watch, watchEffect } from 'vue';
import { COLLAPSE_CTX_KEY } from './constants';
import { debugWarn } from '@salmon-element/utils';

const COMP_NAME = YisCollapse as const;

defineOptions({
	name: 'YisCollapse',
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
const activeNames = ref(props.modelValue);

if (props.accordion && props.modelValue.length > 1) {
	console.warn('accordion mode should only have one active item');
}

function handleItemClick(item: CollapseItemName) {
	let _activeNames = [...activeNames.value];

	// 手风琴模式
	if (props.accordion) {
		_activeNames = [_activeNames[0] === item ? '' : item];
		updateActiveNames(_activeNames);
		return;
	}

	// 非手风琴模式
	const index = _activeNames.indexOf(item);
	if (index > -1) {
		_activeNames.splice(index, 1);
	} else {
		_activeNames.push(item);
	}

	updateActiveNames(_activeNames);
}

function updateActiveNames(newNames: CollapseItemName[]) {
	activeNames.value = newNames;
	emits('update:modelValue', newNames);
	emits('change', newNames);
}

watchEffect(() => {
	if (props.accordion && activeNames.value.length > 1) {
		console.warn('accordion mode should only have one active item');
	}
});

watch(
	() => props.modelValue,
	newNames => updateActiveNames(newNames)
);

provide(COLLAPSE_CTX_KEY, {
	activeNames,
	handleItemClick,
});
</script>

<template>
	<div class="yis-collapse">
		<slot></slot>
	</div>
</template>

<style scoped>
@import './style.css';
</style>

<script setup lang="ts">
import type { CollapseProps, CollapseEmits, CollapseItemName } from './types';
import { provide, ref, watch } from 'vue';
import { COLLAPSE_CTX_KEY } from './constants';

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
	//todo
}

function updateActiveNames(newNames: CollapseItemName[]) {
	activeNames.value = newNames;
	emits('update:modelValue',new)
	emits('change', newNames);
}

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

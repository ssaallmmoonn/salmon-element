<script setup lang="ts">
import { inject, computed } from 'vue';
import { COLLAPSE_CTX_KEY } from './constants';
import type { CollapseItemProps } from './types';

defineOptions({
	name: 'YisCollapseItem',
});
const props = defineProps<CollapseItemProps>();
const ctx = inject(COLLAPSE_CTX_KEY, void 0);
const isActive = computed(() => {
	return ctx?.activeNames.value?.includes(props.name);
});
</script>

<template>
	<div class="yis-collapse-item"></div>
</template>

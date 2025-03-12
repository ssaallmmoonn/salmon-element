<script setup lang="ts">
	import type { CollapseItemProps, CollapseEmits } from './types';

	defineOptions({
		name: 'YisCollapse',
	});

	const props = defineProps<CollapseItemProps>();
	const emits = defineEmits<CollapseEmits>();
</script>

<template>
	<div class="yis-collapse">Collapse</div>
</template>

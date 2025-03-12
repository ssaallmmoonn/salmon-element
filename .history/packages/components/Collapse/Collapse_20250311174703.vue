<script setup lang="ts">
	import type { CollapseProps, CollapseEmits } from './types';

	defineOptions({
		name: 'YisCollapse',
	});

	const props = defineProps<CollapseProps>();
	const emits = defineEmits<CollapseEmits>();
</script>

<template>
	<div class="yis-collapse">
		<slot></slot>
	</div>
</template>

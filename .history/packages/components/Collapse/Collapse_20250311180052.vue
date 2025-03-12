<script setup lang="ts">
	import type { CollapseProps, CollapseEmits } from './types';
	import { provide, ref, watch } from 'vue';
	import { COLLAPSE_CTX_KEY } from './constants';

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

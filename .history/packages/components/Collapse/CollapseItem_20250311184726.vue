<script setup lang="ts">
import { inject, computed } from 'vue';
import type { CollapseItemProps } from './types';
defineOptions({
	name: 'YisCollapseItem',
});
defineProps<CollapseItemProps>();
</script>

<template>
	<div class="yis-collapse-item"></div>
</template>

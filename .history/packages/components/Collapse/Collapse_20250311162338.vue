<script setup lang="ts">
	import type { CollapseItemProps, CollapseEmits } from './types';

	defineOptions({
		name: 'YisCollapse',
	});

	const props = defineProps<CollapseItemProps>();
	const emits = defineEmits<CollapseEmits>();
</script>


temp
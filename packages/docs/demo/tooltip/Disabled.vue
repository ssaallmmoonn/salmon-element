<script lang="ts" setup>
import { ref } from 'vue';

const disabled = ref(false);
</script>

<template>
	<yis-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom">
		<yis-button @click="disabled = !disabled">
			click to {{ disabled ? 'active' : 'close' }} tooltip function
		</yis-button>
	</yis-tooltip>
</template>

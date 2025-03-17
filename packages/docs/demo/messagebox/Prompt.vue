<script setup lang="ts">
import { YisMessageBox, YisMessage } from 'salmon-element';

function openConfirm() {
	YisMessageBox.prompt('Place input your name', 'Tip', { type: 'info' })
		.then(({ value }) => {
			YisMessage.info(`your name is: ${value}`);
		})
		.catch(action => {
			YisMessage.warning(`action: ${action}`);
		});
}
</script>

<template>
	<yis-button @click="openConfirm" plain>Click to open the Confirm</yis-button>
</template>

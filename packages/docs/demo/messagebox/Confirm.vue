<script setup lang="ts">
import { YisMessageBox, YisMessage } from 'salmon-element';

function openConfirm() {
	YisMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
		type: 'warning',
	})
		.then(action => {
			YisMessage.info(`action: ${action}`);
		})
		.catch(action => {
			YisMessage.warning(`action: ${action}`);
		});
}
</script>

<template>
	<yis-button @click="openConfirm" plain>Click to open the Confirm</yis-button>
</template>

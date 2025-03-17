<script setup lang="ts">
import { YisMessageBox, YisMessage } from 'salmon-element';

function openAlert() {
	YisMessageBox.alert('This is a message', 'Title')
		.then(action => {
			YisMessage.info(`action: ${action}`);
		})
		.catch(action => {
			YisMessage.warning(`action: ${action}`);
		});
}
</script>

<template>
	<er-button @click="openAlert" plain>Click to open the Alert</er-button>
</template>

<script setup lang="ts">
import { YisMessage, YisMessageBox } from 'salmon-element';

function openMsgBox() {
	YisMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
		type: 'warning',
		center: true,
		// 这里展示一下 不用 Promise 写法的时候
		callback(action) {
			if (action === 'confirm') {
				YisMessage.info(action);
			} else {
				YisMessage.warning(action as string);
			}
		},
	});
}
</script>

<template>
	<yis-button @click="openMsgBox" plain>Click to open Message Box</yis-button>
</template>

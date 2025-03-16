<script setup>
import { ErMessage } from 'eric-ui';

function handleClose() {
	YisMessage.info('close callback');
}
</script>
<template>
	<div class="basic block">
		<yis-alert title="Unclosable alert" type="success" :closable="false" />
		<yis-alert title="Alert with callback" type="warning" @close="handleClose" />
	</div>
</template>

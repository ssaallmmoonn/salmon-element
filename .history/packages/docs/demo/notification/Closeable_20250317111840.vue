<script lang="ts" setup>
import { YisNotification } from 'salmon-element';

const open = () => {
	YisNotification.success({
		title: 'Info',
		message: 'This is a message without close button',
		showClose: false,
	});
};
</script>

<template>
	<yis-button plain @click="open">Hide close button</yis-button>
</template>

<script lang="ts" setup>
import { YisMessage } from 'salmon-element';

const open1 = () => {
	YisMessage('This is a message.');
};
const open2 = () => {
	YisMessage({
		message: 'Congrats, this is a success message.',
		type: 'success',
	});
};
const open3 = () => {
	YisMessage({
		message: 'Warning, this is a warning message.',
		type: 'warning',
	});
};
const open4 = () => {
	YisMessage.error('Oops, this is a error message.');
};
</script>

<template>
	<yis-button :plain="true" @click="open2">Success</yis-button>
	<yis-button :plain="true" @click="open3">Warning</yis-button>
	<yis-button :plain="true" @click="open1">Message</yis-button>
	<yis-button :plain="true" @click="open4">Error</yis-button>
</template>

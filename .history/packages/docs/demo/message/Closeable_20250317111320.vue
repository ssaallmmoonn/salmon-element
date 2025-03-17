<script lang="ts" setup>
import { YisMessage } from 'salmon-element';

const open1 = () => {
	YisMessage({
		showClose: true,
		message: 'This is a message.',
	});
};
const open2 = () => {
	YisMessage({
		showClose: true,
		message: 'Congrats, this is a success message.',
		type: 'success',
	});
};
const open3 = () => {
	YisMessage({
		showClose: true,
		message: 'Warning, this is a warning message.',
		type: 'warning',
	});
};
const open4 = () => {
	YisMessage({
		showClose: true,
		message: 'Oops, this is a error message.',
		type: 'danger',
	});
};
</script>

<template>
	<er-button :plain="true" @click="open1">Message</er-button>
	<er-button :plain="true" @click="open2">Success</er-button>
	<er-button :plain="true" @click="open3">Warning</er-button>
	<er-button :plain="true" @click="open4">Error</er-button>
</template>

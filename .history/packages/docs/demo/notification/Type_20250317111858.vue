<script lang="ts" setup>
import { YisNotification } from 'salmon-element';

const open1 = () => {
	YisNotification({
		title: 'Success',
		message: 'This is a success message',
		type: 'success',
	});
};

const open2 = () => {
	YisNotification({
		title: 'Warning',
		message: 'This is a warning message',
		type: 'warning',
	});
};

const open3 = () => {
	YisNotification({
		title: 'Info',
		message: 'This is an info message',
		type: 'info',
	});
};

const open4 = () => {
	YisNotification({
		title: 'Error',
		message: 'This is an error message',
		type: 'danger',
	});
};
</script>

<template>
	<yis-button plain @click="open1">Success</yis-button>
	<yis-button plain @click="open2">Warning</yis-button>
	<yis-button plain @click="open3">Info</yis-button>
	<yis-button plain @click="open4">Error</yis-button>
</template>

<script setup lang="ts">
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
		message: 'Congratulates! This is a success message.',
		type: 'success',
	});
};
</script>

<template>
	<yis-button type="primary" size="large">Button</yis-button>
</template>

<style scoped></style>

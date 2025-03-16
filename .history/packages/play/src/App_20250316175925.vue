<script setup lang="ts">
import { YisMessage } from 'salmon-element';

const open1 = () => {
	YisMessage({
		showClose: true,
		message: 'This is a message',
	});
};

const open2 = ()=>{
	YisMessage({
		showClose: true,
		message: 'This is a message',
	});
}
</script>

<template>
	<yis-button type="primary" size="large">Button</yis-button>
</template>

<style scoped></style>

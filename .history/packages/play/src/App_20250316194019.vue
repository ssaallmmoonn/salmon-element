<script setup lang="ts">
import { h } from 'vue';
import { YisNotification } from 'salmon-element';

function openNotify1() {
	YisNotification({
		title: 'Title',
		message: h('i', { style: 'color:teal' }, 'This is a remider.'),
		position: 'bottom-right',
	});
}

function openNotify12() {
	YisNotification({
		title: 'Prompt',
		message: 'This is a message that does not auto close'
		position: 'top-left',
	});
}
</script>

<template></template>

<style scoped></style>

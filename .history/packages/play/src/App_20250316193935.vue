<script setup lang="ts">
import { h } from 'vue';
import { YisNotification } from 'salmon-element';

function openNotify1() {
	YisNotification({
		title: 'Title',
		message: h('i', { style: 'color:teal' }, 'This is a remider.'),
		position
	});
}
</script>

<template></template>

<style scoped></style>

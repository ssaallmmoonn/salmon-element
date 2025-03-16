<script setup lang="ts">
import { h } from 'vue';
import { YisNotification } from 'salmon-element';

function openNotify1(){
	YisNotification({
		title:"Title",
		message: h('i',{style: "color:"})
	})
}


</script>

<template></template>

<style scoped></style>

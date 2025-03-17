<script lang="ts" setup>
import { h } from 'vue';
import { YisMessage } from 'salmon-element';

const open = () => {
	YisMessage('This is a message.');
};

const openVn = () => {
	YisMessage({
		message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
			h('span', null, 'Message can be '),
			h('i', { style: 'color: teal' }, 'VNode'),
		]),
	});
};
</script>

<template>
	<yis-button :plain="true" @click="open">Show message</yis-button>
	<yis-button :plain="true" @click="openVn">VNode</yis-button>
</template>

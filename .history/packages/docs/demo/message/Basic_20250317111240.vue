<script lang="ts" setup>
import { h } from 'vue';
import { YisMessage } from 'eric-ui';

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
	<er-button :plain="true" @click="open">Show message</er-button>
	<er-button :plain="true" @click="openVn">VNode</er-button>
</template>

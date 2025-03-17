<script setup lang="ts">
import { h, ref } from 'vue';
import { YisMessageBox, YisSwitch, type SwitchValueType } from 'salmon-element';

function open1() {
	YisMessageBox({
		title: 'Message',
		message: h('p', null, [
			h('span', null, 'Message can be '),
			h('i', { style: 'color: teal' }, 'VNode'),
		]),
	});
}

function open2() {
	const checked = ref<SwitchValueType>(false);
	YisMessageBox({
		title: 'Message',
		message: () =>
			h(YisSwitch, {
				modelValue: checked.value,
				'onUpdate:modelValue': (val: SwitchValueType) => {
					checked.value = val;
				},
			}),
	});
}
</script>

<template>
	<yis-button @click="open1" plain>Common VNode</yis-button>
	<yis-button @click="open2" plain>Dynamic props</yis-button>
</template>

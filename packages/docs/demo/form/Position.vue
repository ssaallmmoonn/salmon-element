<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { YisMessage, type FormProps } from 'salmon-element';

const form = reactive({
	name: '',
	region: '',
	delivery: false,
	desc: '',
});
const options = ref([
	{ value: 'beijing', label: 'Zone One' },
	{ value: 'shanghai', label: 'Zone Two' },
]);
const labelPosition = ref<FormProps['labelPosition']>('right');

const onSubmit = () => {
	YisMessage.success('submit');
};
</script>

<template>
	<yis-button-group size="small">
		<yis-button
			@click="labelPosition = 'left'"
			:type="labelPosition === 'left' ? 'primary' : 'info'"
		>
			Left
		</yis-button>
		<yis-button
			@click="labelPosition = 'right'"
			:type="labelPosition === 'right' ? 'primary' : 'info'"
		>
			Right
		</yis-button>
		<yis-button @click="labelPosition = 'top'" :type="labelPosition === 'top' ? 'primary' : 'info'">
			Top
		</yis-button>
	</yis-button-group>
	<div style="margin: 20px"></div>
	<yis-form :model="form" :label-position="labelPosition">
		<yis-form-item label="Activity name">
			<yis-input v-model="form.name" />
		</yis-form-item>
		<yis-form-item label="Activity zone">
			<yis-select v-model="form.region" placeholder="please select your zone" :options="options" />
		</yis-form-item>
		<yis-form-item label="Instant delivery">
			<yis-switch v-model="form.delivery" />
		</yis-form-item>
		<yis-form-item label="Activity form">
			<yis-input v-model="form.desc" type="textarea" />
		</yis-form-item>
		<yis-form-item>
			<yis-button type="primary" @click="onSubmit">Create</yis-button>
			<yis-button>Cancel</yis-button>
		</yis-form-item>
	</yis-form>
</template>

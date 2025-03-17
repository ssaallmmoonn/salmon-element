<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { YisMessage } from 'salmon-element';

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

const onSubmit = () => {
	YisMessage.success('submit!');
};
</script>

<template>
	<yis-form :model="form">
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

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { YisMessage, type FormInstance } from 'salmon-element';

const formRef = ref<FormInstance>();
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

const rules = reactive({
	name: [
		{ required: true, message: '请输入活动名称', trigger: 'blur' },
		{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
	],
	region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
	desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
});

const onSubmit = () => {
	formRef.value?.validate().then(valid => {
		if (valid) {
			YisMessage.success('submit!');
		}
	});
};

const onReset = () => {
	formRef.value?.resetFields();
};
</script>

<template>
	<yis-form ref="formRef" :model="form" :rules="rules">
		<yis-form-item label="Activity name" prop="name">
			<yis-input v-model="form.name" />
		</yis-form-item>
		<yis-form-item label="Activity zone" prop="region">
			<yis-select v-model="form.region" placeholder="please select your zone" :options="options" />
		</yis-form-item>
		<yis-form-item label="Instant delivery" prop="delivery">
			<yis-switch v-model="form.delivery" />
		</yis-form-item>
		<yis-form-item label="Activity form" prop="desc">
			<yis-input v-model="form.desc" type="textarea" />
		</yis-form-item>
		<yis-form-item>
			<yis-button type="primary" @click="onSubmit">Create</yis-button>
			<yis-button @click="onReset">Reset</yis-button>
		</yis-form-item>
	</yis-form>
</template>

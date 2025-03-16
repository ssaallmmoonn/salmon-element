<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { YisMessage, type FormInstance } from 'salmon-element';

const formRef = ref<FormInstance>();
const form = reactive({
	name: '',
	desc: '',
});

const rules = reactive({
	name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
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
		<yis-form-item label="Activity form" prop="desc">
			<yis-input v-model="form.desc" type="textarea" />
		</yis-form-item>
		<yis-form-item>
			<yis-button type="primary" @click="onSubmit">Create</yis-button>
			<yis-button @click="onReset">Reset</yis-button>
		</yis-form-item>
	</yis-form>
</template>

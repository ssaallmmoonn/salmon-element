<script lang="ts" setup>
import { YisMessage } from 'salmon-element';

const open1 = () => {
	YisMessage({
		message: 'Congrats, this is a success message.',
		type: 'success',
	});
};
const open2 = () => {
	YisMessage.success('Congrats, this is a success message.');
};
</script>
<template>
	<div>
		<yis-button @click="open1">插件式调用</yis-button>
		<yis-button @click="open2">函数式调用</yis-button>
		<yis-button @click="$message.success('Congrats, this is a success message.')">
			全局方法调用
		</yis-button>
	</div>
</template>

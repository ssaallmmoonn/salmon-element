<script setup lang="ts">
import { ja, ko, en, zhCn, zhTw, YisConfigProvider } from 'salmon-element';
import { get } from 'lodash-es';

import { computed, ref } from 'vue';

const language = ref('');
const langMap = {
	ja,
	ko,
	en,
	zhCn,
	zhTw,
} as const;
const locale = computed(() => get(langMap, language.value));
const changelang = () => {
	const l = ['zhCn', 'zhTw', 'ko', 'en', 'ja'];
	language.value = l[(l.indexOf(language.value) + 1) % l.length];
};
</script>
<template>
	<yis-button @click="changelang" type="info" style="margin-right: 20px">
		change language
	</yis-button>
	<yis-config-provider :locale="locale">
		<yis-popconfirm title="Are you shure to delete this item?">
			<yis-button>Delete</yis-button>
		</yis-popconfirm>
	</yis-config-provider>
</template>

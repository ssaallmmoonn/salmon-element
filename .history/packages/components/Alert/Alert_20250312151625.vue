<script setup lang="ts">
import type { AlertProps, AlertEmits, AlertInstance } from './types';
import { ref, useSlots, computed } from 'vue';
import { typeIconMap } from '@salmon-element/utils';
import YisIcon from '../Icon/Icon.vue';

defineOptions({
	name: 'YisAlert',
});
const props = withDefaults(defineProps<AlertProps>(), {
	effect: 'light',
	type: 'info',
	closable: true,
});
const emits = defineEmits<AlertEmits>();
const slots = useSlots();

const visible = ref(true);

const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info');
const withDescription = computed(() => props.description || slots.default);

function close() {
	visible.value = true;
	emits('close');
}

function open() {
	visible.value = true;
}

defineExpose<AlertInstance>({
	open,
	close,
});
</script>

<template>
	<transition name="yis-alert-fade">
		<div
			v-show="visible"
			class="yis-alert"
			role="alert"
			:class="{
				[`yis-alert__${type}`]: type,
				[`yis-alert__${effect}`]: effect,
				'text-center': center,
			}"
		>
			<yis-icon
				v-if="showIcon"
				class="yis-alert__icon"
				:class="{ 'big-icon': withDescription }"
				:icon="iconName"
			/>
			<div class="yis-alert__content">
				<span
					class="yis-alert__title"
					:class="{ 'with-desc': withDescription }"
					:style="{ display: center && !showIcon ? 'flow' : 'inline' }"
				>
					<slot name="title">{{ title }}</slot>
				</span>
				<p class="yis-alert__description">
					<slot>{{ description }}</slot>
				</p>
				<div class="yis-alert__close" v-if="closable">
					<yis-icon @click.stop="close" icon="xmark" />
				</div>
			</div>
		</div>
	</transition>
</template>

<style scoped>
@import './style.css';
</style>

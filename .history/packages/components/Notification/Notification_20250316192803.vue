<script setup lang="ts">
import type { NotificationProps, NotificationCompInstance } from './types';
import { computed, onMounted, ref } from 'vue';
import { getLastBottomOffset } from './methods';
import { delay, bind } from 'lodash-es';
import { useOffset } from '@salmon-element/hooks';
import { addUnit } from '@salmon-element/utils';
import { typeIconMap, RenderVnode } from '@salmon-element/utils';
import YisIcon from '../Icon/Icon.vue';

defineOptions({ name: 'YisNotification' });

const props = withDefaults(defineProps<NotificationProps>(), {
	type: 'info',
	duration: 3000,
	offset: 20,
	position: 'top-right',
	transitionName: 'fade',
	showClose: true,
});

const visible = ref(false);
const notifyRef = ref<HTMLDivElement>();
// div 高度
const boxHeight = ref(0);

const { topOffset, bottomOffset } = useOffset({
	getLastBottomOffset: bind(getLastBottomOffset, props),
	offset: props.offset,
	boxHeight,
});

const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info');

const horizontalClass = computed(() => (props.position.endsWith('right') ? 'right' : 'left'));

const verticalProperty = computed(() => (props.position.startsWith('top') ? 'top' : 'bottom'));

const customStyle = computed(() => ({
	[verticalProperty.value]: addUnit(topOffset.value),
	zIndex: props.zIndex,
}));

let timer: number;
function startTimmer() {
	if (props.duration === 0) return;
	timer = delay(close, props.duration);
}

function clearTimer() {
	clearTimeout(timer);
}

function close() {
	visible.value = false;
}

onMounted(() => {
	visible.value = true;
	startTimmer();
});

defineExpose<NotificationCompInstance>({
	bottomOffset,
	close,
});
</script>

<template>
	<transition
		:name="`yis-notification-${transitionName}`"
		@after-leave="!visible && onDestory()"
		@enter="boxHeight = notifyRef!.getBoundingClientRect().height"
	>
		<div
			ref="notifyRef"
			class="yis-notification"
			:class="{
				[`yis-notification--${type}`]: type,
				[horizontalClass]: true,
				'show-close': showClose,
			}"
			:style="customStyle"
			v-show="visible"
			role="alert"
			@click="onClick"
			@mouseenter="clearTimer"
			@mouseleave="startTimmer"
		>
			<er-icon v-if="iconName" :icon="iconName" class="yis-notification__icon" />

			<div class="yis-notification__text">
				<div class="yis-notification__title">{{ title }}</div>
				<div class="yis-notification__content">
					<slot>
						<render-vnode v-if="message" :vNode="message" />
					</slot>
				</div>
			</div>
			<div class="yis-notification__close" v-if="showClose">
				<yis-icon icon="xmark" @click.stop="close" />
			</div>
		</div>
	</transition>
</template>

<style>
@import './style.css';
</style>

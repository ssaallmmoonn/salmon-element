<script setup lang="ts">
import { ref, computed } from 'vue';
import { addUnit } from '@salmon-element/utils';
import { useLocale } from '@salmon-element/hooks';
import type { TooltipInstance } from '../Tooltip';
import type { PopconfirmProps, PopconfirmEmits } from './types';

import YisTooltip from '../Tooltip/Tooltip.vue';
import YisButton from '../Button/Button.vue';
import YisIcon from '../Icon/Icon.vue';

defineOptions({
	name: 'YisPopconfirm',
});

const props = withDefaults(defineProps<PopconfirmProps>(), {
	title: '',
	confirmButtonType: 'primary',
	icon: 'question-circle',
	iconColor: '#f90',
	hideAfter: 200,
	width: 150,
});

const emits = defineEmits<PopconfirmEmits>();
const tooltipRef = ref<TooltipInstance>();
const style = computed(() => ({ width: addUnit(props.width) }));

const locale = useLocale();

function hidePopper() {
	tooltipRef.value?.hide();
}

function confrim(e: MouseEvent) {
	emits('confirm', e);
	hidePopper();
}

function cancel(e: MouseEvent) {
	emits('cancel', e);
	hidePopper();
}
</script>

<template>
	<yis-tooltip ref="tooltipRef" trigger="click" :hide-timeout="hideAfter">
		<template #content>
			<div class="yis-popconfirm" :style="style">
				<div class="yis-popconfirm__main">
					<yis-icon v-if="!hideIcon && icon" :icon="icon" :color="iconColor" />
					{{ title }}
				</div>
				<div class="yis-popconfirm__action">
					<yis-button
						class="yis-popconfirm__cancel"
						size="small"
						:type="cancelButtonType"
						@click="cancel"
					>
						{{ cancelButtonText || locale.t('popconfirm.cancelButtonText') }}
					</yis-button>
					<yis-button
						class="yis-popconfirm__confirm"
						size="small"
						:type="confirmButtonType"
						@click="confrim"
					>
						{{ confirmButtonText || locale.t('popconfirm.confirmButtonText') }}
					</yis-button>
				</div>
			</div>
		</template>

		<template v-if="$slots.default" #default>
			<slot name="default"></slot>
		</template>

		<template v-if="$slots.reference" #default>
			<slot name="reference"></slot>
		</template>
	</yis-tooltip>
</template>

<style scoped>
@import './style.css';
</style>

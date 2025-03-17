<script setup lang="ts">
import { type DropdownItemProps, YisMessage } from 'salmon-element';

const items: DropdownItemProps[] = [
	{ command: '1', label: 'Action 1' },
	{ command: '2', label: 'Action 2' },
	{ command: '3', label: 'Action 3', disabled: true },
	{ command: '4', label: 'Action 4', divided: true },
];

function handleClick() {
	YisMessage.info('button click');
}
</script>

<template>
	<div class="row">
		<yis-dropdown :items="items">
			<yis-button type="primary">
				Dropdown List
				<yis-icon icon="angle-down" style="margin-left: 8px" />
			</yis-button>
		</yis-dropdown>
		<yis-dropdown :items="items" type="primary" @click="handleClick" split-button>
			Dropdown List
		</yis-dropdown>
	</div>
</template>

<style scoped>
.row div {
	margin-right: 16px;
}
</style>

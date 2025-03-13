import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, createApp, nextTick } from 'vue';

import { withInstall } from '../install';

const AppComp = defineComponent({
	setup() {
		return () => <div>App</div>;
	},
});

const compA = withInstall(
	defineComponent({
		name: 'CompA',
		setup() {
			return () => <div>CompA</div>;
		},
	})
);

const compB = withInstall(
	defineComponent({
		name: 'CompB',
		setup() {
			return () => <div>CompB</div>;
		},
	})
);

describe('install', () => {
	it('withInstall should be worked', async () => {
		const wrapper = mount(() => <div id="app"></div>);
		const app = createApp(AppComp);

		app.use(compA).use(compB);
		app.mount(wrapper.element);

		await nextTick();

		expect(compA.install).toBeDefined();
		expect(compB.install).toBeDefined();
		// expect(wrapper.findComponent(compA)).toBeTruthy();
		// expect(wrapper.findComponent(compB)).toBeTru();

		// 检查 CompA 是否渲染
		const compAWrapper = wrapper.findComponent(compA);
		expect(compAWrapper.exists()).toBe(false);

		// 检查 CompB 是否渲染
		const compBWrapper = wrapper.findComponent(compB);
		expect(compBWrapper.exists()).toBe(false);
	});
});

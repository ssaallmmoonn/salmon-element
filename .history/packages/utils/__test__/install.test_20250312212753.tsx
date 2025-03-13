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
	it('withInstall should be worked', () => {
		const wrapper = mount(() => <div id="app"></div>);
		const app = createApp(AppComp);

		app.use(compA).use(compB);
		app.mount(wrapper.element);

		expect(compA.install).toBeDefined();
		expect(compB.install).toBeDefined();
		expect(wrapper.findComponent(compA)).toBeTruthy();
		expect(wrapper.findComponent(compB)).toBeTruthy();
    });
    
    it()
});

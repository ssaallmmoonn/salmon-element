import { describe, expect, it } from 'vitest';
import { debugWarn, throwError, withInstall, typeIconMap, makeInstaller } from '..';
import { each } from 'lodash-es';
import { mount } from '@vue/test-utils';
import { h } from 'vue';

describe('utils/index', () => {
	it('debugWarn should be exported', () => {
		expect(debugWarn).toBeDefined();
	});
	it('throwError should be exported', () => {
		expect(throwError).toBeDefined();
	});
	it('withInstall should be exported', () => {
		expect(withInstall).toBeDefined();
	});
	it('withInstall should be exported', () => {
		expect(withInstall).toBeDefined();
	});
	it('typeIconMap should be worked', () => {
		expect(typeIconMap).toBeDefined();
		each(
			[
				['info', 'circle-info'],
				['success', 'check-circle'],
				['warning', 'circle-exclamation'],
				['danger', 'circle-xmark'],
				['error', 'circle-xmark'],
			],
			([type, icon]) => {
				expect(typeIconMap.get(type)).toBe(icon);
			}
		);
	});

	// it('RenderVnode should render string vnode', () => {
	// 	const wrapper = mount(RenderVnode, {
	// 		props: {
	// 			vNode: 'Test String',
	// 		},
	// 	});
	// 	expect(wrapper.text()).toBe('Test String');
	// });
	// it('RenderVnode should render object vnode', async () => {
	// 	const vnode = {
	// 		render() {
	// 			return h('div', 'Test Object');
	// 		},
	// 	};
	// 	const wrapper = mount(RenderVnode, {
	// 		props: {
	// 			vNode: vnode,
	// 		},
	// 	});
	// 	await wrapper.vm.$nextTick();
	// 	expect(wrapper.text()).toBe('Test Object');
	// });
	// it('RenderVnode should render function vnode', () => {
	// 	const vnode = () => 'Test Function';
	// 	const wrapper = mount(RenderVnode, {
	// 		props: {
	// 			vNode: vnode,
	// 		},
	// 	});
	// 	expect(wrapper.text()).toBe('Test Function');
	// });
});

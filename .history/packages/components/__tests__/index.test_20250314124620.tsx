import type { Plugin } from 'vue';
import { describe, it, expect } from 'vitest';
import { YisAlert, YisButton, YisButtonGroup, YisCollapse, YisCollapseItem, YisIcon } from '../';
import { get, map } from 'lodash-es';

const comps = [
	YisAlert,
	YisButton,
	YisButtonGroup,
	YisCollapse,
	YisCollapseItem,
	YisIcon,
	YisT
] as Plugin[];

describe('components/index', () => {
	it.each(map(comps, c => [get(c, 'name') ?? '', c]))('%s should be exported', (_, component) => {
		expect(component).toBeDefined();
		expect(component.install).toBeDefined();
	});
});

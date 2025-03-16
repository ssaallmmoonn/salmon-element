import type { App, Plugin } from 'vue';
import { each } from 'lodash-es';
import { YisConfigProvider, type Config } from '@salmon-element/components';

export function makeInstaller(components: Plugin[]): Plugin {
	const installer = (app: App) => {
		return each(components, c => app.use(c));
	};

	return installer as Plugin;
}

export default makeInstaller;

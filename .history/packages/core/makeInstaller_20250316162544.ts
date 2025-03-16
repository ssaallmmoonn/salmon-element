import type { App, Plugin } from 'vue';
import { each } from 'lodash-es';
import { provideGlobalConfig, type ConfigProviderProps } from '@salmon-element/components';

export function makeInstaller(components: Plugin[]): Plugin {
	const installer = (app: App, opts?: ConfigProviderProps) => {
		each(components, c => app.use(c));
		if (opts) {
			provideGlobalConfig(opts, app, truje);
		}
	};
	return installer as Plugin;
}

export default makeInstaller;

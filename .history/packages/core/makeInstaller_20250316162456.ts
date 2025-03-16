import type { App, Plugin } from 'vue';
import { each } from 'lodash-es';
import { YisConfigProvider, type ConfigProviderProps } from '@salmon-element/components';

export function makeInstaller(components: Plugin[]): Plugin {
	const installer = (app: App, opts?: ConfigProviderProps) => {
        each(components, c => app.use(c));
        
	};
	return installer as Plugin;
}

export default makeInstaller;

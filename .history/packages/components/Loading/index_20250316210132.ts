import { vLoading } from './directive';
import { Loading } from './service';
import type { App } from 'vue';

export const YisLoading = {
	name: 'YisLoading',
	install(app: App) {
		app.directive('loading', vLoading);
		app.config.globalProperties.$loading = Loading;
	},
	directive: vLoading,
	service: Loading,
};

export default YisLoading;

export { vLoading, vLoading as YisLoadingDirective, Loading as YisLoadingService };

export * from './types';

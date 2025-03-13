import type { App } from 'vue';
import { ElementPlusContainer } from '../../../../_node_modules/vitepress-preview-component/index';
import DefaultTheme from 'vitepress/theme';
import SalmonElement from 'salmon-element';

import 'vitepress-preview-component/style.css';
import 'salmon-element/dist/index.css';

export default {
	...DefaultTheme,
	enhanceApp({ app }: { app: App }) {
		app.component('demo-preview', ElementPlusContainer);
		app.use(SalmonElement );
	},
};

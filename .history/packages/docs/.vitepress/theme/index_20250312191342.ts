import type { App } from 'vue';
import { ElementPlusContainer } from '../../../node_modules/vitepress-preview-component';
import DefaultTheme from 'vitepress/theme';
import SalmonElement from 'salmon-element';

import 'vitepress-preview-component/style.css';
import 'salmon-element/dist/index.css';

export default {
	...DefaultTheme,
	enhanceApp({ app }: { app: App }) {
		app.component('demo-preview', ElementPlusContainer);
		app.use(SalmonElement);
	},
};

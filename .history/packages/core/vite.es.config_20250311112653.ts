import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { includes } from 'lodash-es';

// 把所有组件的名字定义到一个数组里
const COMP_NAMES = [
    'Alert',
    'Button',
    'Collapse',
    'Dropdown',
    'Form',
    'Icon',
    'Input',
    'Loading',
    'Message',
    'MessageBox',
    'Notification',
    'Overlay',
    'Popconfirm'
]

export default defineConfig({
	plugins: [
		vue(),
		dts({
			tsconfigPath: '../../tsconfig.build.json',
			outDir: 'dist/types',
		}),
	],
	build: {
		outDir: 'dist/es',
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'SalmonElement',
			fileName: 'index ',
			formats: ['es'],
		},
		rollupOptions: {
			external: [
				'vue',
				'@fortawesome/fontawesome-svg-core',
				'@fortawesome/free-solid-svg-icons',
				'@fortawesome/vue-fontawesome',
				'@popperjs/core',
				'async-validator',
			],
			output: {
				assetFileNames: assetInfo => {
					if (assetInfo.name === 'style.css') {
						return 'index.css';
					}
					return assetInfo.name as string;
				},
				manualChunks(id) {
					if (includes(id, 'node_modules')) return 'vendor';

					if (includes(id, '/packages/hooks')) return 'hooks';

					if (includes(id, '/packages/utils') || includes(id, 'plugin-vue:export-helper'))
						return 'utils';
				},
			},
		},
	},
});

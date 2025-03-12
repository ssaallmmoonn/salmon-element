import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { filter, includes, map, delay } from 'lodash-es';
import { readdirSync } from 'fs';
import shell from 'shelljs';
import hooks from './hooksPlugin'

// 打包时的样式文件移动位置
const TRY_MOVE_STYLES_DELAY = 800 as const;
function moveStyles() {
	try {
		readdirSync('./dist/es/theme');
		shell.mv('./dist/es/theme', './dist');
	} catch (_) {
		delay(moveStyles, TRY_MOVE_STYLES_DELAY);
	}
}

// 把所有组件的名字定义到一个数组里
// const COMP_NAMES = [
// 	'Alert',
// 	'Button',
// 	'Collapse',
// 	'Dropdown',
// 	'Form',
// 	'Icon',
// 	'Input',
// 	'Loading',
// 	'Message',
// 	'MessageBox',
// 	'Notification',
// 	'Overlay',
// 	'Popconfirm',
// 	'Select',
// 	'Switch',
// 	'Tooltip',
// 	'Upload',
// ] as const;

// 用函数收集组件的名字
function getDirectoriesSync(basePath: string) {
	const entries = readdirSync(basePath, { withFileTypes: true });

	return map(
		filter(entries, entry => entry.isDirectory()),
		entry => entry.name
	);
}

export default defineConfig({
	plugins: [
		vue(),
		dts({
			tsconfigPath: '../../tsconfig.build.json',
			outDir: 'dist/types',
		}),
		hooks({
			rmFiles:['./dist/es',]
		}),
	],
	build: {
		outDir: 'dist/es',
		cssCodeSplit: true,
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'SalmonElement',
			fileName: 'index',
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
					if (assetInfo.type === 'asset' && /\.(css)$/i.test(assetInfo.name as string)) {
						return 'theme/[name].[ext]';
					}
					return assetInfo.name as string;
				},
				manualChunks(id) {
					if (includes(id, 'node_modules')) return 'vendor';

					if (includes(id, '/packages/hooks')) return 'hooks';

					if (includes(id, '/packages/utils') || includes(id, 'plugin-vue:export-helper'))
						return 'utils';

					// 遍历所有的组件
					for (const item of getDirectoriesSync('../components')) {
						if (includes(id, `/packages/components/${item}`)) return item;
					}
				},
			},
		},
	},
});

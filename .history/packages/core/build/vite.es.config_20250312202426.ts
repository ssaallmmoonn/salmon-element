import { defineConfig } from 'vite';
import { resolve } from 'path';
import { filter, includes, map, delay, defer } from 'lodash-es';
import { readdir, readdirSync } from 'fs';
import P

import shell from 'shelljs';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import hooks from './hooksPlugin';
import terser from '@rollup/plugin-terser';

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

// 打包时的样式文件移动位置
const TRY_MOVE_STYLES_DELAY = 800 as const;
function moveStyles() {
	readdir('./dist/es/theme', err => {
		if (err) {
			return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
		}
		defer(() => shell.mv('./dist/es/theme', './dist'));
	});
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
			rmFiles: ['./dist/es', './dist/theme', './dist/types'],
			afterBuild: moveStyles,
		}),
		terser({
			compress: {
				sequences: isProd,
				arguments: isProd,
				drop_console: isProd && ['log'],
				drop_debugger: isProd,
				passes: isProd ? 4 : 1,
				global_defs: {
					'@DEV': JSON.stringify(isDev),
					'@PROD': JSON.stringify(isProd),
					'@TEST': JSON.stringify(isTest),
				},
			},
			format: {
				semicolons: false,
				shorthand: isProd,
				braces: !isProd,
				beautify: !isProd,
				comments: !isProd,
			},
			mangle: {
				toplevel: isProd,
				eval: isProd,
				keep_classnames: isDev,
				keep_fnames: isDev,
			},
		}),
	],
	build: {
		outDir: 'dist/es',
		minify: false,
		cssCodeSplit: true,
		lib: {
			entry: resolve(__dirname, '../index.ts'),
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

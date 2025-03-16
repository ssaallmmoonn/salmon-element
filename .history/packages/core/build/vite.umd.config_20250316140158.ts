import { defineConfig } from 'vite';
import { resolve } from 'path';
import { compression } from 'vite-plugin-compression2';
import { readFile } from 'fs';
import { delay, defer } from 'lodash-es';
import { visualizer } from 'rollup-plugin-visualizer';

import shell from 'shelljs';
import vue from '@vitejs/plugin-vue';
import { hooksPlugin as hooks } from '@salmon-element/vite-plugins';
import terser from '@rollup/plugin-terser';

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

// 把dist/umd/index.css给复制到外边和umd同级
// 这个index.css.gz是全部组件的样式的压缩包
const TRY_MOVE_STYLES_DELAY = 800 as const;
function moveStyles() {
	readFile('./dist/umd/index.css.gz', err => {
		if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
		defer(() => shell.cp('./dist/umd/index.css', './dist/index.css'));
	});
}

export default defineConfig({
	plugins: [
		vue(),
		visualizer({
			filename: 'dist/stats/stats.umd.html',
		}),
		compression({
			include: /.(cjs|css)$/i,
		}),
		hooks({
			rmFiles: ['./dist/umd', './dist/index.css'],
			afterBuild: moveStyles,
		}),
		terser({
			compress: {
				drop_console: ['log'],
				drop_debugger: true,
				passes: 3,
				global_defs: {
					'@DEV': JSON.stringify(isDev),
					'@PROD': JSON.stringify(isProd),
					'@TEST': JSON.stringify(isTest),
				},
			},
		}),
	],
	build: {
		outDir: 'dist/umd',
		lib: {
			entry: resolve(__dirname, '../index.ts'),
			name: 'SalmonElement',
			fileName: 'index',
			formats: ['umd'],
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				exports: 'named',
				globals: {
					vue: 'Vue',
				},
				assetFileNames: assetInfo => {
					if (assetInfo.name === 'style.css') {
						return 'index.css';
					}
					return assetInfo.name as string;
				},
			},
		},
	},
});

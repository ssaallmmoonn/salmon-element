import { defineConfig } from 'vite';

import { resolve } from 'path';
import { compression } from 'vite-plugin-compression2';
import { readFileSync } from 'fs';
import { delay } from 'lodash-es';
import shell from 'shelljs';
import vue from '@vitejs/plugin-vue';

import hooks from './hooksPlugin';
import terser from '@rollup/plugin-terser';

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

// 把dist/umd/index.css给复制到外边和umd同级
// 这个index.css.gz是全部组件的样式的压缩包
const TRY_MOVE_STYLES_DELAY = 800 as const;
function moveStyles() {
	try {
		readFileSync('./dist/umd/index.css.gz');
		shell.cp('./dist/umd/index.css', './dist/index.css');
	} catch (_) {
		delay(moveStyles, TRY_MOVE_STYLES_DELAY);
	}
}

export default defineConfig({
	plugins: [
		vue(),
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
			entry: resolve(__dirname, './index.ts'),
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

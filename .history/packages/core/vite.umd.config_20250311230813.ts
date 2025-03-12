import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { compression } from 'vite-plugin-compression2';

// 把dist/umd/index.css.gz给复制到外边和umd同级
// 这个

export default defineConfig({
	plugins: [
		vue(),
		compression({
			include: /.(cjs|css)$/i,
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

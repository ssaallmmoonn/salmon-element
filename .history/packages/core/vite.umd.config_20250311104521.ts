import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
	plugins: [vue()],
	build: {
		outDir: 'dist/umd',
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'SalmonElement',
			fileName: 'index ',
			formats: ['umd'],
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                export
                globals: {
                    vue: 'Vue',
                },
            },
	},
});

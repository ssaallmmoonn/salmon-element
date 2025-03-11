import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
	plugins: [vue()],
	build: {
        outDir: 'dist/umd',
        lib: {
            entry: resolve(__dirname, '../src/'),
            name: 'core',
            fileName: 'core',
        }
	},
});

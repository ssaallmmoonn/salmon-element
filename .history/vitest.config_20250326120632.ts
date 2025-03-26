/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	define: {
		PROD: JSON.stringify(false),
		DEV: JSON.stringify(false),
		TEST: JSON.stringify(true),
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: [resolve(__dirname, './vitest.setup.ts')],
	},
});

// "test": "vitest --coverage"

/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	define: {
		PROD:
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
});

// "test": "vitest --coverage"

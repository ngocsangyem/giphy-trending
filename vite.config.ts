import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/': resolve(__dirname, './src'),
			'@/components': resolve(__dirname, './src/components'),
			'@/styles': resolve(__dirname, './src/styles'),
			'@/common': resolve(__dirname, './src/components/common'),
			'@/assets': resolve(__dirname, './src/assets'),
			'@/pages': resolve(__dirname, './src/pages'),
			'@/routes': resolve(__dirname, './src/routes'),
			'@/hooks': resolve(__dirname, './src/hooks'),
			'@/store': resolve(__dirname, './src/store'),
			'@/services': resolve(__dirname, './src/services'),
		},
	},
});

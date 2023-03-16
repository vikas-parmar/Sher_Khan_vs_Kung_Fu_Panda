/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rollupPlugin from 'rollup-plugin-feature';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), rollupPlugin()],
});

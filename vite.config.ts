import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Sets the base path for assets. 
  // './' ensures assets are loaded relatively, which works for both root and sub-path deployments on GitHub Pages.
  base: './',
  publicDir: resolve(__dirname, 'public'),
});

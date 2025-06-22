import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  base: '/my-site',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

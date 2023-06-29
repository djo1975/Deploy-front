import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './src/main.jsx',
      output: {
        dynamicImportFunction: '__import__',
      },
    },
    chunkSizeWarningLimit: 1000, // Postavite granicu prema vašim potrebama
  },
});

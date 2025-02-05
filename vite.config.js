import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/Hospital-System/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  css: {
    postcss: {
      plugins: [
        postcssNested, 
        postcssPresetEnv 
      ]
    }
  }
});

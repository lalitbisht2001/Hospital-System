import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Hospital-Website/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000 // Increase the limit to 1000 kB
  }
})


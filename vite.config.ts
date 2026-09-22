import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Brew-and-Bean/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // ADD THIS SERVER CONFIGURATION LAYER BELOW:
  server: {
    host: true,       // Listen on all local addresses (crucial for containers/Codespaces)
    port: 5173,       // Lock it to the port you are serving from
    strictPort: true, // Prevents Vite from auto-switching ports if 5173 is temporarily busy
  }
});

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // Vue plugin
import vueDevTools from 'vite-plugin-vue-devtools' // Vue DevTools plugin

// Vite config
export default defineConfig({
  plugins: [
    vue(),  // This enables Vue support in your project
    vueDevTools(), // Optionally, enables Vue DevTools plugin for development
  ],
  resolve: {
    alias: {
      // Helps resolve the '@' symbol to the 'src' directory
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Ensuring Vite works smoothly with the latest versions of Vite and Vue
  optimizeDeps: {
    include: ['vue', '@vitejs/plugin-vue'],
  },
})
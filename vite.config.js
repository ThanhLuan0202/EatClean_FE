import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/payos-api': {
        target: 'https://api-merchant.payos.vn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/payos-api/, '')
      },
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})

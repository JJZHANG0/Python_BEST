import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Python_BEST/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['pyodide']
  }
})

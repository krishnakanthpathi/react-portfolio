import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base :"/",
  plugins: [react()],
  esbuild: {
    target: "esnext", // Supports top-level await
  },
})

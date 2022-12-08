import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: './src/client',
  publicDir: './public',
  build: {
    // root (= ./src) から見た相対パスで指定
    outDir: '../../dist/client',
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
  plugins: [react()],
  test: {
    include: ['../**/*.test.{ts,tsx}'],
    exclude: [],
  },
})

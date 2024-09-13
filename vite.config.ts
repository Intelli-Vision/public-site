import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    environment: 'jsdom', // Ensures tests run in a jsdom environment
    globals: true,
    setupFiles: ['src/setupTests.ts']
  },
})

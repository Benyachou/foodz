import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   URL_API: "http://localhost:5000",
  // },
  plugins: [
      react()
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.tsx",
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   URL_API: "http://localhost:5000",
  // },
  plugins: [
      react()
  ],
  build: {
    outDir: resolve(__dirname, 'server/dist'),
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
    },
  },
})

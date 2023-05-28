import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   URL_API: "http://localhost:5000",
  // },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    })
  ],
  build: {
    outDir: resolve(__dirname, 'dist'),
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
    },
  },
})

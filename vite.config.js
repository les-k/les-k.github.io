import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  // relative paths + single inlined HTML file so the built site works
  // when opened directly from the file system (double-click dist/index.html)
  base: './',
  plugins: [react(), viteSingleFile()],
})

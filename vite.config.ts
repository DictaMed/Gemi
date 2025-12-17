import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Permet le déploiement sur n'importe quel sous-dossier (GitHub Pages)
  build: {
    outDir: 'dist',
  }
})
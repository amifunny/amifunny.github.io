import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Static site for github.com/amifunny/amifunny.github.io
// It's a user site (username.github.io), so it serves from the repo root on
// the `main` branch. We keep base="/" and let the GitHub Action publish dist/ to main.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    target: 'es2020',
    cssMinify: 'lightningcss',
  },
})

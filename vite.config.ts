import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ibc/', // Replace with the actual name of your GitHub repo
  build: {
    outDir: 'dist',
  },
})

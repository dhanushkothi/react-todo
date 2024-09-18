import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // e.g. '0.0.0.0' or 'localhost'
    port: 3000,               // specify your preferred port number
  },
})

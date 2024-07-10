import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/News/',  // This should match your repo name
  plugins: [react()]
});

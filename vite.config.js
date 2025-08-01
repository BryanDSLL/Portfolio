import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true, // Permite acesso de qualquer endereço IP
    port: 3000, // Porta fixa para facilitar o acesso
  },
});

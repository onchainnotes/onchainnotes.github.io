import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 如果部署到 https://chainnotes.github.io/ 则使用 '/'
  // 如果部署到 https://chainnotes.github.io/<repo-name>/ 则使用 '/<repo-name>/'
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    },
    dedupe: ['react', 'react-dom']
  }
});

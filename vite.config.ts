import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 如果部署到 https://onchainnotes.github.io/（用户页仓库：onchainnotes/onchainnotes.github.io）则使用 '/'
  // 如果部署到 https://onchainnotes.github.io/<repo-name>/（项目页仓库）则使用 '/<repo-name>/'
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    },
    dedupe: ['react', 'react-dom']
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@theme/*': path.resolve(__dirname, 'src/theme/*'),
      '@layout': path.resolve(__dirname, 'src/components/layout'),
      '@layout/*': path.resolve(__dirname, 'src/components/layout/*'),
      '@ui': path.resolve(__dirname, 'src/components/ui'),
      '@ui/*': path.resolve(__dirname, 'src/components/ui/*'),
      '@modules': path.resolve(__dirname, 'src/components/modules'),
      '@modules/*': path.resolve(__dirname, 'src/components/modules/*'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@pages/*': path.resolve(__dirname, 'src/pages/*')
    }
  },
  server: {
    port: 5174
  }
});


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import { CRX_CONTENT_OUTDIR } from './globalConfig';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Rest of your code
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 输出目录
    outDir: CRX_CONTENT_OUTDIR,
    lib: {
      entry: [
        path.resolve(__dirname, 'src/content/index.jsx'),
      ],
      formats: ['cjs'],
      fileName: () => 'content.js'
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => 'content.css'
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 解决React代码包含process.env.NODE_ENV导致无法使用的问题
  define: {
    'process.env.NODE_ENV': null,
  },
  plugins: [react()],
})

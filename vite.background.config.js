import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import { CRX_BACKGROUND_OUTDIR } from './globalConfig';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Rest of your code
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 输出目录
    outDir: CRX_BACKGROUND_OUTDIR,
    lib: {
      entry: [
        path.resolve(__dirname, 'src/background/index.jsx'),
      ],
      formats: ['cjs'],
      fileName: () => 'background.js'
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react()],
})

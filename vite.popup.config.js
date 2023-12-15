import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import { CRX_OUTDIR } from './globalConfig';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Rest of your code
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 输出目录
    outDir: CRX_OUTDIR,
  },
  server: {
    // 指定devServer的端口，默认为 5173
    port: 5173,
    // 启动时打开浏览器 true or "/" ("localhost:5173/")
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react()],
})

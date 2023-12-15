import fs from 'fs';
import path from 'path';
import { CRX_OUTDIR, CRX_CONTENT_OUTDIR, CRX_BACKGROUND_OUTDIR } from './globalConfig';

const copyDirectory = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
  fs.readdirSync(src).forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

const deleteDirectory = (dir) => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDirectory(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
};

const contentOutDir = path.resolve(process.cwd(), CRX_CONTENT_OUTDIR);

const backgroundOutDir = path.resolve(process.cwd(), CRX_BACKGROUND_OUTDIR);

const outDir = path.resolve(process.cwd(), CRX_OUTDIR);

copyDirectory(contentOutDir, outDir);

copyDirectory(backgroundOutDir, outDir);

deleteDirectory(contentOutDir);

deleteDirectory(backgroundOutDir);

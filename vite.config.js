import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { globSync } from 'glob';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// html/components フォルダ以外のすべての HTML ファイルを自動検出して登録する関数
const htmlFiles = globSync('**/*.html', {
  ignore: ['node_modules/**', 'dist/**', 'components/**'],
}).reduce((acc, file) => {
  const name = path.relative('', file).replace(/\.html$/, '');
  acc[name] = fileURLToPath(new URL(file, import.meta.url));
  return acc;
}, {});

export default defineConfig({
  plugins: [
    injectHTML(),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: htmlFiles,
    },
  },
});

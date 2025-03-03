/// <reference types="vite/client" />
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
});
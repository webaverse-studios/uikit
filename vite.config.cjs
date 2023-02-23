import path from 'path';

import react from '@vitejs/plugin-react';
import hq from 'alias-hq';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

import * as pkg from './package.json';

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
    banner({
      verify: false,
      content: `'use client';`,
    }),
    banner(
      `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`,
    ),
  ],
  resolve: {
    alias: hq.get('rollup'),
  },
  build: {
    lib: {
      name: 'uikit',
      entry: path.resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  ssr: {
    noExternal: true,
  },
  // VITEST CONFIG
  test: {
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
  },
});

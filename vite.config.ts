/// <reference types="vitest" />
import {
  loadEnv, defineConfig, UserConfig,
} from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    test: {
      globals: true,
      environment: 'jsdom',
      // browser: {
      //   enabled: true,
      //   headless: true,
      //   name: 'edge',
      // },
    },
    plugins: [
      dts({
        outDir: __dirname,
        entryRoot: 'src',
        staticImport: true,
        rollupTypes: true,
        beforeWriteFile: (filePath, content) => {
          if (filePath === `${__dirname}/index.d.ts`) {
            content = `/// <reference path="./types/index.d.ts" />\n\n${content}`;
          }
          return { filePath, content };
        },
      }),
    ],
    build: {
      emptyOutDir: true,
      copyPublicDir: false,
      sourcemap: false,
      lib: {
        entry: [
          resolve(__dirname, 'src/index.ts'),
        ],
      },
      rollupOptions: {
        output: [
          {
            format: 'es',
            dir: 'esm',
            preserveModules: true,
            exports: undefined,
            entryFileNames: '[name].mjs',
            preserveModulesRoot: 'src',
          },
          {
            format: 'cjs',
            dir: 'lib',
            preserveModules: true,
            exports: undefined,
            entryFileNames: '[name].cjs',
          },
          {
            format: 'iife',
            dir: 'dist',
            name: 'Utils',
            preserveModules: false,
            exports: undefined,
            entryFileNames: '[name].js',
          },
        ],
        external: ['vue'],
      },
    },
  } as UserConfig;
});

import {
  loadEnv, defineConfig, UserConfig,
} from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [
      dts({
        outDir: 'esm',
        staticImport: true,
        rollupTypes: true,
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
            preserveModules: false,
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

import { builtinModules } from 'node:module';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
  // Global ignores (replaces .eslintignore)
  {
    ignores: ['dist/**', 'esm/**', 'lib/**', 'node_modules/**', 'index.d.ts'],
  },

  // Recommended configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,

  // General rules and settings (all files)
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.mjs', '.cjs', '.js'],
          moduleDirectory: ['node_modules'],
        },
      },
    },
    rules: {
      'import/prefer-default-export': 'off',
      semi: ['error', 'always'],
      'no-extra-semi': 'error',
      'no-plusplus': 'off',
      'no-param-reassign': 'off',
      'max-len': ['error', { code: 120, ignoreComments: true }],
      'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
      'import/no-extraneous-dependencies': 'off',
      'no-promise-executor-return': 'off',
      'default-param-last': 'off',
      'no-nested-ternary': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
      // Relax stricter TypeScript rules from typescript-eslint v8 (not present in v7)
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unnecessary-type-constraint': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  // Source files — browser environment, no Node.js builtins
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: builtinModules,
          patterns: ['node:*'],
        },
      ],
    },
  },

  // Build scripts — Node.js environment, console allowed
  {
    files: ['scripts/**/*.ts'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-console': 'off',
    },
  },

  // Test files — Node.js + Vitest globals
  {
    files: ['tests/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.vitest,
      },
    },
    rules: {
      'max-len': 'off',
    },
  },

  // ESLint config file itself
  {
    files: ['eslint.config.mjs'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },

  // Root-level config files (vite.config.ts, etc.)
  {
    files: ['*.ts'],
    languageOptions: {
      globals: globals.node,
    },
  },
];

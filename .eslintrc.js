module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': [
      'off',
      'single',
    ],
    semi: ['error', 'always'],
    'no-extra-semi': 'error',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'no-promise-executor-return': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'default-param-last': 'off',
    'eslint-disable-next-line': 'off',
    'no-nested-ternary': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
        moduleDirectory: ['node_modules'],
      },
    },
  },
};

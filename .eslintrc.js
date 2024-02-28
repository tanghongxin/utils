module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
  ],
  globals: {
    wx: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/prefer-default-export': [
      'off',
      'single',
    ],
    semi: ['error', 'never'],
    'no-extra-semi': 'error',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
  },
}

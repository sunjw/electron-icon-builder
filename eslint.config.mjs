// ESLint v9+ flat config using ES modules
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  prettier.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2017,
      sourceType: 'module',
      globals: {},
      env: {
        node: true,
        es6: true,
      },
    },
    plugins: {},
    rules: {
      'no-console': 'off',
      'prettier/prettier': 'error',
    },
  },
];

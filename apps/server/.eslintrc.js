/* eslint-disable no-undef */
declare var module: NodeModule;
declare var __dirname: string;
/* eslint-enable no-undef */

module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  globals: {
    module: 'readonly',
    __dirname: 'readonly',
  },
  extends: ['@vue-storefront/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['/*.*', 'lib/**/*.ts', '**/*.js'],
  overrides: [
    {
      files: ['*.ts'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
      }
    }
  ],
  rules: {
    'unicorn/prefer-top-level-await': 'off',
  },
};

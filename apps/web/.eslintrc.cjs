module.exports = {
  extends: ['@vue-storefront/eslint-config', '@vue-storefront/eslint-config/vue3', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
  },
  rules: {
    complexity: 0,
    'max-lines-per-function': 'off',
    'max-lines': ['warn', { max: 1500, skipBlankLines: true, skipComments: true }],
    'max-statements': 'off',
    'no-undef': 'off',
    'no-restricted-imports': [
      'error',
      {
<<<<<<< HEAD
        'paths': [{
          name: '@storefront-ui/vue',
          importNames: ['SfButton'],
          message: `SfButton doesn't conform to the app's design system. Use UiButton instead.`,
        }],
=======
        paths: [
          {
            name: '@storefront-ui/vue',
            importNames: ['SfButton'],
            message: `SfButton doesn't conform to the app's design system. Use UiButton instead.`,
          },
        ],
>>>>>>> ab4a41ac (20241011)
      },
    ],
    'etc/no-deprecated': 'off',
    'etc/no-internal': 'off',
    'no-secrets/no-secrets': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-keyword-prefix': ['error', { disallowedPrefixes: ['new', 'for'] }],
    'unicorn/prefer-array-some': 'off',
    'sonarjs/no-duplicate-string': 'off',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // Deaktiviert die Regel für die Verwendung von "any"
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
<<<<<<< HEAD
    'vue/max-len': ['warn', {
      code: 120,
      ignoreStrings: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreHTMLAttributeValues: true,
    }],
=======
    'vue/max-len': [
      'warn',
      {
        code: 120,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreHTMLAttributeValues: true,
      },
    ],
>>>>>>> ab4a41ac (20241011)
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
  },
  overrides: [
    {
      files: 'build/**/*.ts',
      rules: {
        'no-console': 'off',
      },
    },
  ],
};

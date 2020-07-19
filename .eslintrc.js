module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:lodash/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:react/all',
  ],
  globals: {
    Headway: true,
  },
  overrides: [
    { files: ['src/index.js'], rules: { 'filenames/no-index': 'off' } },

    // Development overrides
    {
      files: [
        '**/*.test.js',
        '**/__tests__/*.js',
        '.storybook/*.js',
        'config/jest/setup.js',
        'config/webpack/*.js',
        '*.stories.js',
      ],
      rules: {
        'filenames/match-exported': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-handler-names': 'off',
        'react/no-multi-comp': 'off',
        'react/prop-types': 'off',
      },
    },

    // NodeJS overrides
    {
      files: [
        '.eslintrc.js',
        'jest.config.js',
        'config/webpack/*.js',
        '.storybook/*.js',
      ],
      rules: { 'import/no-commonjs': 'off', 'import/no-nodejs-modules': 'off' },
    },
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: '2017',
    sourceType: 'module',
  },
  plugins: [
    'classes',
    'compat',
    'eslint-comments',
    'filenames',
    'import',
    'jest',
    'lodash',
    'promise',
    'react',
    'react-hooks',
  ],
  root: true,
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'classes/name': ['error', 'class', 'method'],
    'classes/space': 'error',
    'classes/style': 'error',
    'compat/compat': 'error',
    'filenames/match-exported': ['error', 'kebab'],
    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': ['error', 'always', { js: 'never' }],
    'import/first': 'error',
    'import/group-exports': 'error',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-nodejs-modules': 'error',
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          { from: './stories', target: './src' },
          { from: './.storybook', target: './src' },
        ],
      },
    ],
    'import/no-self-import': 'error',
    'import/no-unassigned-import': [
      'error',
      {
        allow: [
          '**/*.css',
          '@storybook/addon-options/register',
          '@storybook/addon-backgrounds/register',
          '@testing-library/jest-dom/extend-expect',
          'babel-polyfill',
          'storybook-addon-jsx/register',
        ],
      },
    ],
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'warn',
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest/lowercase-name': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'lodash/import-scope': ['error', 'full'],
    'lodash/prefer-lodash-chain': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-noop': 'off',
    'promise/always-return': 'off',
    'promise/no-callback-in-promise': 'error',
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'warn',
    'promise/valid-params': 'error',
    quotes: ['error', 'single'],
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': ['error', { forbid: ['style'] }],
    'react/forbid-prop-types': 'warn', // TODO: Convert to error once fixed
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-set-state': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['error', 'property assignment'],
    'react-hooks/rules-of-hooks': 'error',
    'sort-keys': ['error', 'asc', { natural: true }],
  },
  settings: {
    polyfills: ['URLSearchParams'],
    react: {
      version: 'detect',
    },
  },
};

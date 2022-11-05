module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'off',
        jsx: 'off',
        ts: 'off',
        tsx: 'off',
      },
    ],
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'no-plusplus': 'off',
  },
};

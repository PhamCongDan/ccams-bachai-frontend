module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint-config-prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  ignorePatterns: ['App.jsx', '**/vendor/*.js', '.eslintrc.js', 'src/index.js'],
  rules: {
    'linebreak-style': 0,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-nested-ternary': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'import/prefer-default-export': 'off',
    radix: 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'off',
    'consistent-return': 'off',
    camelcase: 'warn',
    'no-unused-vars': ['warn'],
    'import/no-unresolved': ['warn'],
    'react/jsx-closing-bracket-location': [
      1,
      {
        selfClosing: 'line-aligned',
        nonEmpty: 'props-aligned',
      },
    ],
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'object-curly-newline': 0,
    'import/no-extraneous-dependencies': 0,
    'implicit-arrow-linebreak': 0,
    'react/no-array-index-key': 0,
    'react/jsx-curly-newline': 0,
    'no-param-reassign': 0,
    'default-param-last': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-unstable-nested-components': 0,
  },
};
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next'],
  rules: {
    'react/jsx-indent': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    quotes: ['warn', 'single'],
    'react/require-default-props': 'off',
    'import/extensions': 'off',
    'react/function-component-definition': 'off',
    'react/destructuring-assignment': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to', 'square', 'size'],
      },
    ],
    'max-len': [
      'warn',
      {
        ignoreComments: true,
        code: 120,
      },
    ],
    // "react/jsx-uses-react": "off",
    // "react/react-in-jsx-scope": "off",
  },

  // parser: "@typescript-eslint/parser",
  // settings: {
  //   react: {
  //     pragma: "React",
  //     version: "detect",
  //   },
  // },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.tsx', '***/src/**/*.test.ts'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};

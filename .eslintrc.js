module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-indent": [2, 2],
    indent: [2, 2],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    quotes: ["warn", "single"],
    "react/require-default-props": "off",
    "import/extensions": "off",
    "react/function-component-definition": "off",
    "react/destructuring-assignment": "warn",
    "react/jsx-props-no-spreading": "warn",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "import/no-extraneous-dependencies": "warn",
  },
  parser: "@typescript-eslint/parser",
};

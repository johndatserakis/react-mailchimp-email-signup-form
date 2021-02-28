module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    "prettier",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ["**/*.stories.{js,jsx,ts,tsx,mdx}"],
      rules: {
        "react/jsx-props-no-spreading": "off",
        "import/no-extraneous-dependencies": "off"
      }
    },
  ],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'react/require-default-props': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/jsx-props-no-spreading": "off"
  },
};

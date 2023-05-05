module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {  "project": "./tsconfig.json", ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react/function-component-definition": "error",
    "react/react-in-jsx-scope": "off"
  },
}

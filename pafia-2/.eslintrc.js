module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  plugins: ['vue'],

  rules: {
    'valid-v-for': ['off'],
    'vue/no-unused-components': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'line-ending': 0,
    "space-before-function-paren": "off",
    // don't require .vue extension when importing
    'import/extensions': [
      'off',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
};

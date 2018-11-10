module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'line-ending': 0,
    // don't require .vue extension when importing
    'import/extensions': ['off', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

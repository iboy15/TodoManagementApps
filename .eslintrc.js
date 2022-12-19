module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
    'curly': [2, 'multi-line'],
    'react/react-in-jsx-scope': 'off',
  },
};

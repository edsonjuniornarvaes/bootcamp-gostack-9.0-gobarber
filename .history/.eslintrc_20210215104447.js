module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],

  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
  },
};

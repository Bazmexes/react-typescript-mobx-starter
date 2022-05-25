module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "plugin:@next/next/recommended", "google", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "require-jsdoc": 0,
    "react/react-in-jsx-scope": 0
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};

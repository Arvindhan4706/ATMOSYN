module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    // Accessibility
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/img-alt": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/label-has-associated-control": "warn",

    // React Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // General
    "@next/next/no-html-link-for-pages": "error",
    "@next/next/no-img-element": "warn",
    "react/no-unescaped-entities": "warn",
  },
};
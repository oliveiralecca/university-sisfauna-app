module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "eslint-plugin-import-helpers"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-bind": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/jsx-no-useless-fragment": "off",
    "global-require": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
      },
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: ["/^react/", "module", ["parent", "sibling", "index"]],
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],
    "max-len": [
      "error",
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true, // "comments": 80
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};

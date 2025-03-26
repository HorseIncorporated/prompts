import js from "@eslint/js";
import * as tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import eslintCommentsPlugin from "eslint-plugin-eslint-comments";
import importPlugin from "eslint-plugin-import";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    ignores: [
      "dist/",
      "node_modules/",
      "coverage/",
      "chromatic-helper.js",
      "monkeypatch-chromatic.js"
    ]
  },
  {
    files: ["**/*.{js,ts,mjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node
      },
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "import": importPlugin,
      "eslint-comments": eslintCommentsPlugin,
      "unused-imports": unusedImportsPlugin,
      "@typescript-eslint": tseslintPlugin
    },
    rules: {
      "eslint-comments/no-unused-disable": "warn",
      "eslint-comments/no-unlimited-disable": "off",
      "unused-imports/no-unused-imports": "warn",
      "no-console": "off",
      "no-debugger": "warn",
      "no-alert": "warn",
      "no-undef": "off",
      "no-case-declarations": "off",
      "eqeqeq": ["warn", "always"],
      "no-unused-vars": "off",
      "import/no-duplicates": "warn",
      "prefer-const": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_"
        }
      ],
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
];
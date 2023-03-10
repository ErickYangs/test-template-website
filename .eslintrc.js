module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "plugin:vue/vue3-recommended",
      "airbnb-base",
      "airbnb-typescript/base",
      "plugin:@typescript-eslint/recommended",
      // "plugin:@typescript-eslint/recommended-requiring-type-checking", // It will slow down the lint performance
      "plugin:promise/recommended",
      "plugin:prettier/recommended",
      "plugin:vuejs-accessibility/recommended",
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
      project: ["./tsconfig.eslint.json"],
      extraFileExtensions: [".vue"],
      ecmaVersion: 12,
      parser: "@typescript-eslint/parser",
      sourceType: "module",
    },
    plugins: ["vue", "@typescript-eslint", "prettier", "vuejs-accessibility"],
    rules: {
      "no-useless-catch": "off",
      "prettier/prettier": "error",
      "import/prefer-default-export": "off", // export default is bad
      "@typescript-eslint/unbound-method": "off", // for useI18n
      "vue/html-button-has-type": "error",
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          registeredComponentsOnly: false,
        },
      ],
      "vue/custom-event-name-casing": ["error", "camelCase"],
      "vue/valid-define-props": "error",
      "vue/valid-define-emits": "error",
      "vue/v-for-delimiter-style": "error",
      "import/no-extraneous-dependencies": "off",
      "@typescript-eslint/naming-convention": "off",
      "vuejs-accessibility/anchor-has-content": [
        "error",
        {
          accessibleChildren: ["i"],
          accessibleDirectives: ["t"],
        },
      ],
      "vuejs-accessibility/heading-has-content": ["off"],
      "vuejs-accessibility/media-has-caption": ["off"],
      "vuejs-accessibility/form-control-has-label": ["off"],
      "import/no-cycle": ["off"],
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: ["index"],
        },
      ],
    },
    globals: {
      defineProps: "readonly",
      defineEmits: "readonly",
      defineExpose: "readonly",
      withDefaults: "readonly",
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
        },
      },
    },
  };
  
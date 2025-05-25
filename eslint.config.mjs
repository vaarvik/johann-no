import antfu from "@antfu/eslint-config"
import nextPlugin from "@next/eslint-plugin-next"

export default antfu(
  {
    type: "app",
    typescript: true,
    react: true,
    formatters: true,
    stylistic: {
      indent: 2,
      quotes: "double",
      semi: false,
    },
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": [
        "warn",
        {
          "ts-ignore": "allow-with-description",
        },
      ],
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unsafe-function-type": "error",
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "max-depth": ["warn", 3],
      "max-lines": ["warn", 400],
      "no-case-declarations": "error",
      "no-empty": "off",
      "no-unneeded-ternary": "error",
      "no-console": "off",
      "node/prefer-global/process": "off",
      "node/prefer-global/buffer": "off",
      "unicorn/prefer-number-properties": "off",
      "react-hooks-extra/no-direct-set-state-in-use-effect": "off",
      "react-refresh/only-export-components": "off",
      "react/no-context-provider": "off",
      "style/comma-dangle": "off",
      "style/jsx-one-expression-per-line": "off",
      "style/brace-style": ["error", "1tbs"],
      "style/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
        },
      ],
      "ts/no-this-alias": "off",
      "ts/no-use-before-define": "off",
    },
  },
)

import antfu from "@antfu/eslint-config";

export default antfu({
  ignores: [""],

  // Parse the `.gitignore` file to get the ignores, on by default
  gitignore: true,

  // Enable stylistic formatting rules
  // stylistic: true,

  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: "double",
    semi: true,
  },

  // TypeScript and Vue are autodetected, you can also explicitly enable them:
  typescript: true,
  react: true,
  // Disable jsonc and yaml support
  rules: {
    "no-console": "warn",
    "perfectionist/sort-named-imports": "off",
    "node/prefer-global/process": "off",
    "react-refresh/only-export-components": "off",
  },
});

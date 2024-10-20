/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  printWidth: 145,
  arrowParens: "avoid",
  trailingComma: "es5",
  proseWrap: "never",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;

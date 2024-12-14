/**
 * @type {import("prettier").Config}
 * Need to restart IDE when changing configuration
 * Open the command palette (Ctrl + Shift + P) and execute the command > Reload Window.
 */
export default {
    plugins: ["prettier-plugin-tailwindcss"],
    endOfLine: "lf",
    semi: false,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    printWidth: 120,
}

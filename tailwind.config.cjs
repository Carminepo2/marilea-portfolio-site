/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        syne: ["Syne", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#4777FD",
        secondary: "#C0D0FC",
        content: "#EEF3FF",
      },
      boxShadow: {
        custom: "0px 3px 0px 0px #C0D0FC",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

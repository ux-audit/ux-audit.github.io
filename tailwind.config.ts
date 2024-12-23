/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./{exemples,utils}/**/*.{vue,js,ts,jsx,tsx,html,md}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

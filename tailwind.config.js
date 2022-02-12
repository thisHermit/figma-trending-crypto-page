module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "pink-primary": "#C517F1",
        "light-blue-primary": "#5AFFFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

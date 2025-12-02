export default {
  content: [
    "./index.html",
    "./resources/views/**/*.njk",
    "./resources/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ]
}

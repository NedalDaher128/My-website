/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{css,js}',
    './views/**/*.ejs',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// npx tailwindcss -i ./public/stylesheets/home.css -o ./public/stylesheets/tailwind.css --watch
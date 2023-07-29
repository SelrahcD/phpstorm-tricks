module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",]
};

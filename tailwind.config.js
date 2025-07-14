/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // Ensure this path covers all your HTML files
    // If you have subfolders for HTML, e.g., src/pages/*.html
    // "./src/**/*.html",
    // "./js/**/*.js", // If you use Tailwind classes in JS files
  ],
  theme: {
    extend: {
      fontFamily: {
        alumni: ['"Alumni Sans"'],
      },
    },
  },
  plugins: [
    require('flyonui'), // Add FlyonUI plugin here
    require('@iconify/tailwind4'), // Add Iconify plugin here
  ],
};
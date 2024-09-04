/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#007bff", // Azul claro
        "primary-dark": "#0056b3", // Azul oscuro
        "background-light": "#c2c2c2", // Fondo claro
        "background-dark": "#343a40", // Fondo oscuro
        "text-light": "#212529", // Texto claro
        "text-dark": "#f8f9fa", // Texto oscuro
      },
    },
  },
  plugins: [],
};

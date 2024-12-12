/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir los archivos .jsx y .tsx
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: '#1a1a1a', // Color de fondo oscuro
        textDark: '#f0f0f0', // Color de texto en modo oscuro
      },
    },
  },
  plugins: [],
}

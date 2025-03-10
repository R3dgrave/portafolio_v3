/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mp: "320px", // 📱 Mobile Portrait (320x480)
        ml: "480px", // 📱 Mobile Landscape (480x320)
        stp: "600px", // 📲 Small Tablet Portrait (600x800)
        md: "800px", // 📲 Tablet Portrait (768x1024) (ya existe como `md` en Tailwind)
        lg: "1024px", // 📲 Tablet Landscape (1024x768) (ya existe como `lg` en Tailwind)
      },
    },
  },
  plugins: [],
};

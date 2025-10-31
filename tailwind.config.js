/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#1DA568",
        secondarycolor: "#f00",
        whitesmokecolor: "#eeeeee",
        purewhite: "#ffffff",
        gray: "#f0f0f0",
        darkgray: "#212129",
        black: "#000000",
      },
      borderRadius: {
        "xl-2": "1.25rem",
      },
      boxShadow: {
        "soft-lg": "0 10px 30px rgba(16,24,40,0.08)",
      },
    },
  },
  plugins: [],
};

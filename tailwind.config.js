/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#37bff1",
        clr2: "#984e99",
        dark: "#1d1433",
        dark2: "rgba(11, 19, 42, 0.7)",
        dark3: "#3a506b",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontSize: {
        "title-1": "var(--title-1)",
        "title-2": "var(--title-2)",
        "title-3": "var(--title-3)",
        "title-4": "var(--title-4)",
        "title-5": "var(--title-5)",
        "title-6": "var(--title-6)",
        "title-7": "var(--title-7)",
        "title-16-14": "var(--title-16-14)",
        "title-14-12": "var(--title-14-12)",
        "title-16": "16px",
      },
      fontFamily: {
        amin: ["Amin", "sans-serif"],
      },
      height: {
        nav: "75px",
      },
      padding: {
        nav: "75px",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};

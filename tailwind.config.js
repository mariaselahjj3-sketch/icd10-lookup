/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#142B2E",
        paper: "#EEF2F1",
        surface: "#FFFFFF",
        line: "#D7DEDC",
        muted: "#5C6B6A",
        alert: "#B4432E",
        codebg: "#E3F0EE",
        teal: {
          DEFAULT: "#1F6F6B",
          dark: "#14504D",
          light: "#2F8A85",
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

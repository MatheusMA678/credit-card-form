/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Source Sans Pro', sans-serif",
      },
      colors: {
        purplePrimary: "#9333EA",
        body: "#111827",
        input: "#111827",
        main: "#1F2937",
        textColor: "#E5E7EB",
        borderColor: "#374151",
      },
    },
  },
  plugins: [],
};

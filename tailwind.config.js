/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainbg: "url('/bgimg.png')",
        footerbg: "url('/footerimgw.png')",
      },
      fontFamily: {
        hind: ["Hind Siliguri", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        custom_green_dark: "#0B714C",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

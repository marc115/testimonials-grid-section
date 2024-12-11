import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        "quote-position": "85% top"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "quote": "url('/bg-pattern-quotation.svg')"
      },
      colors: {
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
        'moderate-violet': 'hsl(263, 55%, 52%)',
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)'
      }
    },
  },
  plugins: [],
};
export default config;

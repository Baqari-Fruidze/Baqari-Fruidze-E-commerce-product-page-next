import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.75) 100%)",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        des: "1440px",
      },
    },
  },
  boxShadow: {
    custom: "0px 20px 50px -20px rgba(29, 32, 38, 0.50)",
  },

  plugins: [],
};
export default config;

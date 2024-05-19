import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    letterSpacing: {
      normal: "0.10em",
    },
    extend: {
      colors: {
        "brand-blue": "#99CEFF",
        "brand-red": "#FFA5A5",
      },
      fontFamily: {
        sans: ["var(--font-lato)"],
        mono: ["var(--font-roboto-mono)"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          foreground: "#000000",
          primary: "#C1E2F4",
          "primary-content": "#002230",
          secondary: "#8CC5E4",
          accent: "#FFCF52",
          neutral: "#242424",
          "base-100": "#FFFFFF",
          "base-200": "#F6F6F6",
          "base-300": "#E3E3E3",
          info: "#c7e1f2",
          "info-content": "#39668d",
          success: "#BCDBA9",
          "success-content": "#3c7e44",
          warning: "#FAE5AE",
          "warning-content": "#986523",
          error: "#FFD1D1",
          "error-content": "#aa2e26",
          "base-content": "#39668d",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "0.2rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          foreground: "#FFFFFF",
          "primary-content": "#FFFFFF",
        },
      },
      {
        dim: {
          ...require("daisyui/src/theming/themes")["dim"],
          foreground: "#FFFFFF",
          "primary-content": "#FFFFFF",
          "success-content": "#8aecc0",
          "warning-content": "#ead16b",
          "info-content": "#428591",
          "base-content": "#71e8fc",
          "error-content": "#f3b29f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;

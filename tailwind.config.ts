import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.scss",
  ],
  theme: {},
  plugins: [daisyui],
  daisyui: {
    themes: ["black"],
  },
};
export default config;

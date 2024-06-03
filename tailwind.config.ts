import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-slower': 'spin 10s linear infinite',
        'spin-slower-rev': 'spin 10s linear infinite reverse',
        'pingss':'ping 3s cubic-bezier(0, 0, 0.1, 1) infinite;'
      },
      backgroundImage: {
        'circularDark': 'repeating-radial-gradient(hsla(0, 0%, 100%, .5) 2px, #28282B 8px, #28282B 100px)',
        'circularDarkLg':'repeating-radial-gradient(hsla(0, 0%, 100%, .5) 2px, #28282B 8px, #28282B 80px);',
        'circularDarkMd':'repeating-radial-gradient(hsla(0, 0%, 100%, .5) 2px, #28282B 8px, #28282B 60px);',
        'circularDarkSm':'repeating-radial-gradient(hsla(0, 0%, 100%, .5) 2px, #28282B 8px, #28282B 40px);'
      },
    },
  },
  plugins: [],
};
export default config;

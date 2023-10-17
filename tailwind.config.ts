import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)"],
      },
      colors: {
        primary: "#0A1445",
        textmain: "#253554",
        textmuted: "#637394",
        danger: "#BC002E"
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",   
        secondary: "#e37400",
        tercedary: "#033980", 
        background: "#f5f5f5", 
        foreground: "#333333",
        fundo: "#e6f1ff",
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      spacing: {
        '72': '18rem',  // Exemplo de espaçamento personalizado
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],  // Fonte sem serifa
        serif: ['Georgia', 'Times', 'serif'],                 // Fonte com serifa
      },

    },
  },
  plugins: [],
};
export default config;

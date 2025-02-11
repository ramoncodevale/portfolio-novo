import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'san-felix': {
    '50': '#f4faf3',
    '100': '#e5f5e3',
    '200': '#caebc7',
    '300': '#a1d99c',
    '400': '#6fc068',
    '500': '#4ba344',
    '600': '#398633',
    '700': '#2d6529',
    '800': '#295526',
    '900': '#224621',
    '950': '#0e260d',
},

      
                        
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

    },
  },
  plugins: [],
} satisfies Config;

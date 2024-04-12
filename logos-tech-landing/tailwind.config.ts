import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      backgroundImage: {
        "servicos-processador": "url('/cpu.jpg')",
        "servicos-dev": "url('/servicos-dev.jpg')",
        "servicos-manutencao": "url('/manutencao.jpg')",
        "servicos-montagem": "url('/montagem.jpg')",
        "servicos-gamer": "url('/gamer.jpg')",
      },
      colors: {
        "logos-primary-bg": "#060021",
        "logos-secondary-bg": "#130559",
      },
      minHeight: {
        "3/4": "75vh",
        "2/4": "50vh",
      },
      inset: {
        mid: "200px",
      },
    },
  },
  plugins: [],
};
export default config;

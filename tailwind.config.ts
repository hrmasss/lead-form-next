import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
            },
            colors: {
                foreground: "hsl(var(--foreground))",
                background: "hsl(var(--background))",
                card: "hsl(var(--card))",
                border: "hsl(var(--border))",
                primary: "hsl(var(--primary))",
                accent: "hsl(var(--accent))",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
export default config;

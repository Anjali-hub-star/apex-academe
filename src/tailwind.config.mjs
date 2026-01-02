/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.6', letterSpacing: '0.025em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.025em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.6', letterSpacing: '0.025em', fontWeight: '500' }],
                '2xl': ['1.5rem', { lineHeight: '1.7', letterSpacing: '0.025em', fontWeight: '500' }],
                '3xl': ['1.875rem', { lineHeight: '1.7', letterSpacing: '0.025em', fontWeight: '600' }],
                '4xl': ['2.25rem', { lineHeight: '1.8', letterSpacing: '0.025em', fontWeight: '600' }],
                '5xl': ['3rem', { lineHeight: '1.8', letterSpacing: '0.025em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1.9', letterSpacing: '0.025em', fontWeight: '700' }],
                '7xl': ['4.5rem', { lineHeight: '1.9', letterSpacing: '0.025em', fontWeight: '700' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '800' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '800' }],
            },
            fontFamily: {
                heading: ["playfair-display-v2", "serif"],
                paragraph: ["opensanshebrewcondensed-regular", "sans-serif"]
            },
            colors: {
                primary: "#052547ff",
                "primary-foreground": "#FFFFFF",
                secondary: "#E0E0E0",
                "secondary-foreground": "#5c707bff",
                background: "#F9F9F9",
                "light-blue": "#ADD8E6",
                destructive: "#D32F2F",
                "destructive-foreground": "#FFFFFF",
                foreground: "#1A2B4A",
                accent: "#D4A574"
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}

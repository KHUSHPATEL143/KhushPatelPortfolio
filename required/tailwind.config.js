/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#121212',
            },
            fontFamily: {
                sans: ['Aptos', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
                serif: ['Iowan Old Style', 'Palatino Linotype', 'Georgia', 'serif'],
                mono: ['Consolas', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
        },
    },
    plugins: [],
}

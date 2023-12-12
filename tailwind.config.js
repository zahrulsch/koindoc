/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{tsx,ts}", "./src/*.{tsx,ts}"],
    theme: {
        extend: {
            fontFamily: {
                sans: "Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                mono: "'JetBrains Mono', monospace",
            },
        },
    },
    plugins: [],
}

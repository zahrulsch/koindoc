export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "@tailwindcss/nesting": {},
        cssnano: {
            preset: [
                "default",
                {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        },
    },
}

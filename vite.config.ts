import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import AutoImport from "unplugin-auto-import/vite"
import { customAlphabet } from "nanoid"
import path from "path"

const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "w",
    "x",
    "y",
    "z",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
]

const slugify = (text: string, actRandom = true, randSize = 7) => {
    const temp: Array<string> = []

    text.split("").forEach((char) => {
        if (!/[A-Za-z]/g.test(char)) {
            temp.push("")
            return
        }

        if (char !== char.toUpperCase()) {
            const len = temp.length

            if (!len) {
                temp[0] = char
                return
            }

            temp[len - 1] = temp[len - 1] + char
            return
        }

        temp.push(char.toLowerCase())
    })

    if (actRandom) {
        const nanoid = customAlphabet(chars.join(""), randSize)
        return temp.join("-") + `-${nanoid()}`
    }

    return temp.join("-")
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        AutoImport({
            dirs: ["./src/utils/**"],
            dts: "./src/auto-import.d.ts",
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                chunkFileNames(info) {
                    return `assets/js/${slugify(info.name, true, 9)}.chunk.js`
                },
                entryFileNames(info) {
                    return `${slugify(info.name, false)}.js`
                },
                assetFileNames(info) {
                    const { ext, name } = path.parse(info.name)

                    switch (ext) {
                        case ".css":
                            return `assets/css/${slugify(name, false)}${ext}`
                        case ".jpg":
                        case ".webp":
                        case ".png":
                            return `assets/images/${slugify(name, false)}${ext}`
                        default:
                            return `assets/[name].[ext]`
                    }
                },
            },
        },
    },
})

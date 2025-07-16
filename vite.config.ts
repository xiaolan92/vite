import {defineConfig} from 'vite'
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import {resolve} from "path";

export default defineConfig({
    base: './',
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        },
    },

    plugins: [
        react({
            babel: {
                plugins: [
                    // other Babel plugins
                    [
                        "@locator/babel-jsx/dist",
                        {
                            env: "development",
                        },
                    ],
                ],
            },
        }),
        tailwindcss(),
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
                {from: /\/vite-project/, to: '/vite-project/index.html'}
            ]
        }

    }
})

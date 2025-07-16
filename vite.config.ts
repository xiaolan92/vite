import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from "path";

export default defineConfig({

    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        },
    },

    plugins: [
        react(),
        tailwindcss(),
    ],
})

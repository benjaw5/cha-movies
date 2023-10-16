import { defineConfig } from 'vite'
import { fileURLToPath, URL} from "node:url";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/cs122b_fall22_project1_star_example/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})

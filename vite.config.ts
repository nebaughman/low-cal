import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "node:path"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
// https://blog.ayitinya.me/articles/how-to-create-and-publish-vue-component-to-npm
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    outDir: "./lib", // https://stackoverflow.com/a/66867648
    emptyOutDir: true,
    lib: {
      formats: ['es', 'umd'],
      entry: resolve(__dirname, "src/index.ts"),
      name: "LowCal",
      fileName: (format) => `low-cal.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})

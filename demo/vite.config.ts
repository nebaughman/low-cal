import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import libPackage from "../package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    LOW_CAL_LIB_VERSION: JSON.stringify(libPackage.version),
  }
})

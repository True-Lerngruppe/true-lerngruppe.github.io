import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  // we NEED this to be the "path" to the site
  // e.g. "https://true-lerngruppe.github.io" is assumed, but the site
  // is actually at "https://true-lerngruppe.github.io/vue_app"
  // so we need to set this to "vue_app".
  // If renaming the repo, CHANGE this
  //base: '/vue_app/',
})

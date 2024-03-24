// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "nuxt-icon",
    "nuxt-tiptap-editor",
  ],
  tiptap: {
    prefix: "Tiptap", //prefix for Tiptap imports, composables not included
  },
  css: ["primevue/resources/themes/aura-light-green/theme.css"],

  postcss: {
    plugins: {
      "postcss-custom-properties": false,
    },
  },
});

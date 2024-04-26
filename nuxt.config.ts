// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    authSecret: process.env.AUTH_SECRET
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "nuxt-icon",
    "nuxt-tiptap-editor",
    '@nuxtjs/mdc',
    'nuxt-server-utils',
    '@sidebase/nuxt-auth'
  ],
  tiptap: {
    prefix: "Tiptap", //prefix for Tiptap imports, composables not included
  },
  css: [
    "primevue/resources/themes/aura-light-green/theme.css",
    '@/assets/css/custom.css',

  ],

  mdc: {
    highlight: {
        theme: {
            default: 'vitesse-light',
            dark: 'material-theme-palenight',
        },
        preload: [
            'sql'
        ]
    },
    remarkPlugins: {
        'remark-mdc': {
            options: {
            experimental: {
                autoUnwrap: true
            }
            }
        }
    }
  },
  nuxtServerUtils: {
    enabled: true, // default
    enableDevTools: true, // default
    mongodbUri: process.env.MONGODB_URI,
  },
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
        type: 'authjs'
    }
},
  postcss: {
    plugins: {
      "postcss-custom-properties": false,
    },
  },
  tailwindcss: {
    config: {
      content: ["presets/**/*.{js,vue,ts}"],
      theme: {
        extend: {
          colors: {
            primary: "#1fb9ad",
            seocundary: "#7091B7",
            dark: "#252932",
            medium: "#293245",
          },
          screens: {
            tablet: "640px",
            // => @media (min-width: 640px) { ... }

            laptop: "1024px",
            // => @media (min-width: 1024px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
          },
        },
      },
    },
  },
});

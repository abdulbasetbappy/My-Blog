// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	postcss: {
		plugins: {
		  "postcss-custom-properties": false
		},
	  },
	modules: [
		'@nuxtjs/tailwindcss',
		'nuxt-primevue'
	]
})

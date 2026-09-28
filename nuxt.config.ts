// https://nuxt.com/docs/api/configuration/nuxt-config
import { projects } from './app/data/projects'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@vercel/analytics'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  ssr: true,
  app: {
    baseURL: '/Portfolio/',
  },
  nitro: {
    prerender: {
      routes: projects.map(project => `/projets/${project.slug}`),
    },
  },
})
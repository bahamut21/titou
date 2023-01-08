// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { shim: false },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Titou's app",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
    },
  },
  runtimeConfig: {
    // Private or public tokens that need to be specified after build using environment variables.
    apiSecret: "123",
    public: { apiBase: "/api" },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@use "@/assets/colors.sass" as *;' },
      },
    },
  },
});

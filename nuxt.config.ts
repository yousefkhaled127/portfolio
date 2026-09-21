export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'Yousef Khaled — Front-End Developer',
      meta: [
        { name: 'description', content: 'Front-End Developer specializing in Vue.js and Nuxt.js, with experience in e-commerce, REST APIs, and Arabic/English localization.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Yousef Khaled — Front-End Developer' },
        { property: 'og:description', content: 'Front-End Developer specializing in Vue.js and Nuxt.js, with experience in e-commerce, REST APIs, and Arabic/English localization.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap'
        }
      ]
    }
  }
})

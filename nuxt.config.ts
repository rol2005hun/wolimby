// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  app: {
    head: {
      title: 'Wolimby - rol2005hun',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css', crossorigin: 'anonymous' },
        { rel: 'icon', href: 'https://i.imgur.com/Z4uWZ64.jpg', type: 'image/x-icon' }
      ],
      meta: [
        { name: 'title', content: 'Wolimby - rol2005hun' },
        { name: 'description', content: 'Ranyák Roland a nevem, 17 éves vagyok, full-stack fejlesztő, jelenleg a Nuxt.js-t tanulom' }
      ]
    },
    rootId: 'app'
  },
  static: {
    directory: 'static'
  }
}

export default config;

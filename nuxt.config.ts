// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  app: {
    head: {
      title: 'Wolimby - Games',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css', crossorigin: 'anonymous' },
        { rel: 'icon', href: 'https://th.bing.com/th/id/OIP.dpj5KnfqkMhGRq0zDHki6AHaHa?pid=ImgDet&rs=1', type: 'image/x-icon' }
      ],
      meta: [
        { name: 'title', content: 'Wolimby - Typeracer' },
        { name: 'description', content: 'A simple typeracer application for developers, using code snippets' }
      ]
    },
    rootId: 'app'
  },
  static: {
    directory: 'static'
  }
}

export default config;

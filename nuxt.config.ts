import { defineNuxtConfig } from 'nuxt/config';
import dotenv from 'dotenv/config';

export default defineNuxtConfig({
  srcDir: 'src',
  target: 'server',
  // vite: {
  //   resolve: {
  //     alias: {
  //       stream: 'stream-browserify',
  //     },
  //   },
  // },
  buildModules: [
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '',
        preference: 'system',
        fallback: 'dark',
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Poppins: [400, 500, 600, 700],
        },
        display: 'auto',
      },
    ],
    [
      '@nuxtjs/tailwindcss',
      {
        cssPath: 'src/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
        exposeConfig: false,
        config: null,
        injectPosition: 0,
        viewer: true,
      },
    ],
  ],
  runtimeConfig: {
    public: {
      person: {
        birthDate: process.env.BIRTH_DATE,
        email: process.env.EMAIL,
        fathersName: process.env.FATHERS_NAME,
        firstName: process.env.FIRST_NAME,
        mothersName: process.env.MOTHERS_NAME,
        userName: process.env.USER_NAME,
        secondaryName: process.env.SECONDARY_NAME,
      },
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en', style: 'font-family: Poppins' },
      title: /*process.env.npm_package_name ||*/ '@IvanGodinez21',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: '@IvanGodinez21',
          content: '@IvanGodinez21',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://avatars.githubusercontent.com/u/45635827?v=4',
        },
      ],
    },
  },
});

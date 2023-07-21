import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
  sourcemap: {
    server: true,
    client: true,
  },
  modules: [
    [
      '@nuxt/image',
      {
        image: {
          domains: ['avatars.githubusercontent.com', 'api.lanyard.rest'],
        },
      },
    ],
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '',
        preference: 'system',
        fallback: 'dark',
      },
    ],
    [
      '@nuxtjs/eslint-module',
      {
        lintOnStart: false,
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        display: 'auto',
        download: true,
        families: {
          Poppins: [400],
        },
        subsets: ['latin'],
      },
    ],
    [
      '@nuxtjs/tailwindcss',
      {
        configPath: 'tailwind.config.ts',
        cssPath: '@/styles/globals.css',
        viewer: true,
      },
    ],
  ],
  plugins: [{ src: '@/plugins/vercel.ts', mode: 'client' }],
});

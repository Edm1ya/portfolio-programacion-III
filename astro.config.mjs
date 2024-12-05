import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },

  integrations: [tailwind()],
  site: 'https://edmiyadev.github.io',
  base: 'portfolio-astro',
  output: 'server',
  adapter: vercel()
});
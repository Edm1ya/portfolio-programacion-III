import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';

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
  output: 'static',
  adapter: vercelStatic(),
});
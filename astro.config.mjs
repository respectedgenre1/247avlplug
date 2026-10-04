import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://247avlplug.com',
  output: 'static',
  adapter: cloudflare(),
  integrations: [sitemap()],
});

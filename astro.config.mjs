import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // <-- Add this import

export default defineConfig({
  site: '', // <-- Make sure your domain is here
  integrations: [sitemap()],      // <-- Add this line
});

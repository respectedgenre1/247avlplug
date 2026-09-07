import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // <-- Add this import

export default defineConfig({
  site: 'https://247avlplug.com', // <-- Make sure your domain is here
  integrations: [sitemap()],      // <-- Add this line
});
